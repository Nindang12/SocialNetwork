"use client"
import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { Heart, Repeat, MessageCircle } from "lucide-react";
import { debounce } from 'lodash';
import Link from "next/link";

function formatTime(createdAt: string) {
  const now = new Date();
  const postDate = new Date(createdAt);
  const diffInMs = now.getTime() - postDate.getTime();
  const diffInMinutes = Math.floor(diffInMs / (1000 * 60));
  if (diffInMinutes < 1) {
    return "vừa xong";
  } else if (diffInMinutes < 60) {
    return `${diffInMinutes} phút`;
  } else if (diffInMinutes < 1440) {
    const diffInHours = Math.floor(diffInMinutes / 60);
    return `${diffInHours} giờ`;
  } else {
    const diffInDays = Math.floor(diffInMinutes / 1440);
    return `${diffInDays} ngày`;
  }
}

export default function SearchPage() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState('posts');
  const [results, setResults] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [userMap, setUserMap] = useState<{ [userId: string]: any }>({});
  const [postStates, setPostStates] = useState<{ [postId: string]: { liked: boolean, likeCount: number, reposted: boolean, repostCount: number } }>({});
  const [localPosts, setLocalPosts] = useState<any[]>([]);
  const [localUsers, setLocalUsers] = useState<any[]>([]);
  const [randomPosts, setRandomPosts] = useState<any[]>([]);
  const [randomUsers, setRandomUsers] = useState<any[]>([]);
  const [currentUser, setCurrentUser] = useState<any>(null);

  // Tạo debounced search function
  const debouncedSearch = useCallback(
    debounce((query: string) => {
      if (!query.trim()) {
        setResults([]);
        return;
      }
      setLoading(true);
      setError("");
      const token = localStorage.getItem('token');
      let url = '';
      if (activeTab === 'posts') {
        url = `http://127.0.0.1:8000/search/posts?query=${encodeURIComponent(query)}`;
      } else {
        url = `http://127.0.0.1:8000/search/users?query=${encodeURIComponent(query)}`;
      }
      axios.get(url, {
        headers: { 'Authorization': `Bearer ${token}` }
      })
        .then(res => {
          if (activeTab === 'posts') {
            const posts = res.data.results || [];
            setResults(posts);
            
            // Initialize post states with liked/reposted status from API
            const initialStates: { [key: string]: any } = {};
            posts.forEach((post: any) => {
              const liked = post.liked_by?.map((id: string) => String(id).trim()).includes(String(currentUser?.user_id).trim());
              const reposted = post.reposted_by?.map((id: string) => String(id).trim()).includes(String(currentUser?.user_id).trim());
              initialStates[post.post_id] = {
                liked,
                likeCount: post.likes || 0,
                reposted,
                repostCount: post.reposts || 0
              };
            });
            setPostStates(prev => ({...prev, ...initialStates}));
          } else {
            setResults(res.data.users || []);
          }
        })
        .catch(err => {
          setError("Không tìm thấy kết quả hoặc có lỗi xảy ra.");
          setResults([]);
        })
        .finally(() => {
          setLoading(false);
        });
    }, 500), // 500ms debounce
    [activeTab, currentUser]
  );

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    setResults([]);
    setError("");
    // Nếu đã có searchQuery thì tự động tìm lại khi đổi tab
    if (searchQuery.trim()) {
      debouncedSearch(searchQuery);
    }
  };

  useEffect(() => {
    const fetchPosts = async () => {
      const token = localStorage.getItem('token');
      const res = await axios.get('http://127.0.0.1:8000/posts', {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      setLocalPosts(res.data.results || []);
    };
    fetchPosts();
  }, []);

  useEffect(() => {
    const fetchUsers = async () => {
      const token = localStorage.getItem('token');
      const res = await axios.get('http://127.0.0.1:8000/users', {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      setLocalUsers(res.data.results || []);
    };
    fetchUsers();
  }, []);

  useEffect(() => {
    if (activeTab === 'posts' && !searchQuery.trim() && localPosts.length > 0) {
      const shuffled = [...localPosts].sort(() => 0.5 - Math.random());
      setRandomPosts(shuffled.slice(0, 5));
    }
  }, [searchQuery, activeTab, localPosts, results]);

  useEffect(() => {
    if (activeTab === 'users' && !searchQuery.trim() && localUsers.length > 0) {
      const shuffled = [...localUsers].sort(() => 0.5 - Math.random());
      setRandomUsers(shuffled.slice(0, 5));
    }
  }, [searchQuery, activeTab, localUsers, results]);

  useEffect(() => {
    const fetchCurrentUser = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get("http://127.0.0.1:8000/users/me", {
          headers: { 'Authorization': `Bearer ${token}` }
        });
        setCurrentUser(response.data.user);
      } catch (err) {
        // fallback to localStorage if needed
        const local = localStorage.getItem('currentUser');
        if (local) setCurrentUser(JSON.parse(local));
      }
    };
    fetchCurrentUser();
  }, []);

  useEffect(() => {
    // Khi có kết quả mới, fetch thông tin user cho các user_id chưa có
    const fetchUsers = async () => {
      const userIds = Array.from(new Set(results.map((p: any) => p.user_id).filter(Boolean)));
      const missingIds = userIds.filter(id => !userMap[id]);
      if (missingIds.length === 0) return;
      const token = localStorage.getItem('token');
      const newUserMap: { [userId: string]: any } = {};
      await Promise.all(missingIds.map(async (id) => {
        try {
          const res = await axios.get(`http://127.0.0.1:8000/users/${id}`, {
            headers: { 'Authorization': `Bearer ${token}` }
          });
          newUserMap[id] = res.data.user;
        } catch {}
      }));
      setUserMap(prev => ({ ...prev, ...newUserMap }));
    };
    if (activeTab === 'posts' && results.length > 0) fetchUsers();
    // eslint-disable-next-line
  }, [results, activeTab]);

  const handleLike = async (post: any) => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`http://127.0.0.1:8000/posts/${post.post_id}/like`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        const data = await response.json();
        // Use backend response to update like state
        const userHasLiked = data.liked_by?.map((id: string) => String(id).trim()).includes(String(currentUser?.user_id).trim());
        setPostStates(prev => ({
          ...prev,
          [post.post_id]: {
            ...prev[post.post_id],
            liked: userHasLiked,
            likeCount: data.likes ?? prev[post.post_id]?.likeCount ?? post.likes ?? 0,
          }
        }));
      }
    } catch (error) {
      console.error('Error liking post:', error);
    }
  };

  const handleRepost = async (post: any) => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`http://127.0.0.1:8000/posts/${post.post_id}/repost`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        const data = await response.json();
        // Use backend response to update repost state
        const userHasReposted = data.reposted_by?.map((id: string) => String(id).trim()).includes(String(currentUser?.user_id).trim());
        setPostStates(prev => ({
          ...prev,
          [post.post_id]: {
            ...prev[post.post_id],
            reposted: userHasReposted,
            repostCount: data.reposts ?? prev[post.post_id]?.repostCount ?? post.reposts ?? 0,
          }
        }));
      }
    } catch (error) {
      console.error('Error reposting post:', error);
    }
  };

  return (
    <div className="w-full h-screen bg-gray-100 flex flex-col items-center p-4 text-black">
      <h1 className="text-xl font-bold mb-4">Tìm kiếm</h1>
      <div className="max-w-xl w-full h-auto text-black">
        <div className="bg-white rounded-2xl shadow-md p-4 space-y-4">
          {/* Search input */}
          <div className="relative">
            <input
              type="text"
              placeholder="Tìm kiếm..."
              className="w-full p-2 pl-10 border rounded-lg focus:outline-none"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                debouncedSearch(e.target.value);
              }}
            />
            <svg
              className="absolute left-3 top-2.5 h-5 w-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>

          {/* Tabs */}
          <div className="flex border-b">
            <button
              className={`px-4 py-2 ${activeTab === 'posts' ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-500'}`}
              onClick={() => handleTabChange('posts')}
            >
              Bài viết
            </button>
            <button
              className={`px-4 py-2 ${activeTab === 'users' ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-500'}`}
              onClick={() => handleTabChange('users')}
            >
              Người dùng
            </button>
          </div>

          {/* Search results */}
          <div className="space-y-4 min-h-[100px] overflow-y-auto max-h-[560px]">
            {loading && <div className="text-gray-400">Đang tìm kiếm...</div>}
            {error && <div className="text-red-500 text-sm">{error}</div>}
            {!loading && !error && results.length === 0 && <div className="text-gray-400 text-sm">Không có kết quả.</div>}
            {activeTab === 'posts' && results.map((post: any) => {
              const user = userMap[post.user_id] || {};
              const state = postStates[post.post_id] || {
                liked: post.liked_by?.map((id: string) => String(id).trim()).includes(String(currentUser?.user_id).trim()),
                likeCount: post.likes || 0,
                reposted: post.reposted_by?.map((id: string) => String(id).trim()).includes(String(currentUser?.user_id).trim()),
                repostCount: post.reposts || 0
              };
              return (
                <div
                  key={post.post_id}
                  className="bg-white text-black p-4 shadow-md w-full rounded-lg border hover:bg-gray-50 cursor-pointer mb-2 flex gap-3"
                  onClick={() => router.push(`/comment/${post.post_id}`)}
                >
                  <img src={user.avatar ? `http://127.0.0.1:8000/media/${user.avatar}` : "https://placehold.co/40x40"} alt="Avatar" className="w-10 h-10 rounded-full" />
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold">{user.username || "user"}</span>
                      <span className="text-xs text-gray-500">{post.created_at ? formatTime(post.created_at) : "time"}</span>
                    </div>
                    <div className="mt-1 break-words">{post.content}</div>
                    {post.image_id && (
                      <img src={`http://127.0.0.1:8000/media/${post.image_id}`} alt="Post" className="mt-2 rounded-lg max-w-full" />
                    )}
                    {post.video_id && (
                      <video src={`http://127.0.0.1:8000/media/${post.video_id}`} controls className="mt-2 rounded-lg w-full" />
                    )}
                    <div className="flex gap-4 text-gray-500 mt-3">
                      <button
                        className="flex items-center space-x-1 hover:text-black"
                        onClick={e => { e.stopPropagation(); handleLike(post); }}
                      >
                        <Heart className={state.liked ? "text-red-500" : "text-gray-500"} size={18} />
                        <span>{state.likeCount ?? post.likes ?? 0}</span>
                      </button>
                      <button
                        className="flex items-center space-x-1 hover:text-black"
                        onClick={e => { e.stopPropagation(); router.push(`/comment/${post.post_id}`); }}
                      >
                        <MessageCircle size={18} />
                        <span>{post.comments ?? 0}</span>
                      </button>
                      <button
                        className="flex items-center space-x-1 hover:text-black"
                        onClick={e => { e.stopPropagation(); handleRepost(post); }}
                      >
                        <Repeat className={state.reposted ? "text-green-500" : "text-gray-500"} size={18} />
                        <span>{state.repostCount ?? post.reposts ?? 0}</span>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
            {activeTab === 'users' && results.map((user: any) => (
              <Link
                key={user.user_id}
                href={`/profile/${user.user_id}`}
                className="block p-2 border rounded mb-2 hover:bg-gray-100 transition"
              >
                <div className="font-semibold">{user.username}</div>
                <div className="text-xs text-gray-500">ID: {user.user_id}</div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
