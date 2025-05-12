"use client"
import Image from 'next/image'
import Link from 'next/link'
import { notFound, useParams } from 'next/navigation'
import { Tab } from '@headlessui/react'
import { MessageCircle, Heart, Repeat, Video, Image as ImageIcon, X, Pencil } from "lucide-react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

interface Post {
  id: string
  content: string
  author: {
    name: string
    username: string
    avatarUrl?: string
  }
  createdAt: string
  likes: number
  replies: number
  reposts: number
  images?: string[]
}

export default function ProfilePage() {
  const router = useRouter()
  const params = useParams();
  const userId = params.userId as string;

  const formatTime = (createdAt: string) => {
    const now = new Date();
    const postDate = new Date(createdAt);
    const diffInMinutes = Math.floor((now.getTime() - postDate.getTime()) / (1000 * 60));
    
    if (diffInMinutes < 60) {
      return `${diffInMinutes} phút`;
    } else if (diffInMinutes < 1440) { // Less than 24 hours
      const diffInHours = Math.floor(diffInMinutes / 60);
      return `${diffInHours} giờ`;
    } else {
      const diffInDays = Math.floor(diffInMinutes / 1440);
      return `${diffInDays} ngày`;
    }
  };

  const [activeTab, setActiveTab] = useState('posts')
  const [isFollowing, setIsFollowing] = useState(false)
  const [user, setUser] = useState<any>(null);
  const [posts, setPosts] = useState<any[]>([]);
  const [replies, setReplies] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState<any>(null);
  const [showEditProfile, setShowEditProfile] = useState(false);
  const [editData, setEditData] = useState({
    full_name: user?.full_name || "",
    phone_number: user?.phone_number || "",
    username: user?.username || "",
    email: user?.email || "",
    bio: user?.bio || "",
    avatar: null as File | null,
  });
  const [editLoading, setEditLoading] = useState(false);
  const [reposts, setReposts] = useState<any[]>([]);

  const fetchProfile = async () => {
    setLoading(true);
    try {
      const token = localStorage.getItem('token');
      const userRes = await axios.get(`http://127.0.0.1:8000/users/${userId}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setUser(userRes.data.user);

      const postsRes = await axios.get(`http://127.0.0.1:8000/users/${userId}/posts`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setPosts(postsRes.data.posts);

      // Lấy comments của user
      const commentsRes = await axios.get(`http://127.0.0.1:8000/comments/user/${userId}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      
      // Lấy comments từ response
      const userComments = commentsRes.data;

      // Lấy các post chứa comment của user
      const postIds = [...new Set(userComments.map((comment: any) => comment.post_id))];
      
      const postsWithComments = await Promise.all(
        postIds.map(async (postId) => {
          try {
            const postRes = await axios.get(`http://127.0.0.1:8000/posts/${postId}`, {
              headers: { Authorization: `Bearer ${token}` }
            });
            
            // Lấy post data từ response
            const postData = postRes.data;

            // Lấy thông tin user của post
            const postUserRes = await axios.get(`http://127.0.0.1:8000/users/${postData.user_id}`, {
              headers: { Authorization: `Bearer ${token}` }
            });
            
            // Lọc comments thuộc về post này
            const postComments = userComments.filter((comment: any) => comment.post_id === postId);
            
            // Thêm comments và thông tin user vào post data
            return {
              ...postData,
              userComments: postComments,
              user: postUserRes.data.user
            };
          } catch (error) {
            console.error(`Error fetching post ${postId}:`, error);
            return null;
          }
        })
      );

      // Lọc bỏ các post null và sắp xếp theo thời gian mới nhất
      const validPosts = postsWithComments
        .filter(Boolean)
        .sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());

      setReplies(validPosts);

      // Lấy tất cả các bài post
      const allPostsRes = await axios.get(`http://127.0.0.1:8000/posts`, {
        headers: { Authorization: `Bearer ${token}` }
      });

      // Lọc ra các post mà user đã repost
      const repostedPosts = allPostsRes.data.filter((post: any) => 
        Array.isArray(post.reposted_by) && 
        post.reposted_by.map((id: string) => String(id).trim()).includes(String(userId).trim())
      );

      // Thêm thông tin user cho mỗi post đã repost
      const repostedPostsWithUsers = await Promise.all(
        repostedPosts.map(async (post: any) => {
          try {
            const postUserRes = await axios.get(`http://127.0.0.1:8000/users/${post.user_id}`, {
              headers: { Authorization: `Bearer ${token}` }
            });
            return {
              ...post,
              user: postUserRes.data.user
            };
          } catch (error) {
            console.error(`Error fetching user for post ${post.post_id}:`, error);
            return post;
          }
        })
      );

      // Sắp xếp theo thời gian mới nhất
      const sortedRepostedPosts = repostedPostsWithUsers.sort(
        (a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
      );

      setReposts(sortedRepostedPosts);
    } catch (err) {
      console.error('Error fetching profile data:', err);
      setUser(null);
      setPosts([]);
      setReplies([]);
      setReposts([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProfile();
  }, [userId]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const user = JSON.parse(localStorage.getItem("currentUser") || "{}");
      setCurrentUser(user);
    }
  }, []);

  useEffect(() => {
    if (user && currentUser) {
      const isFollowed = Array.isArray(user.followers)
        ? user.followers.map((id: string) => String(id).trim()).includes(String(currentUser.user_id).trim())
        : false;
      setIsFollowing(isFollowed);
    }
  }, [user, currentUser]);
  
  const PostCard = ({ post, onActionDone }: { post: any, onActionDone: () => void }) => {
    const isLiked = Array.isArray(post.liked_by) && currentUser
      ? post.liked_by.map((id: string) => String(id).trim()).includes(String(currentUser.user_id).trim())
      : false;
    const [liked, setLiked] = useState(isLiked);
    const [likeCount, setLikeCount] = useState(post.likes ?? 0);
    const isReposted = Array.isArray(post.reposted_by) && currentUser
      ? post.reposted_by.map((id: string) => String(id).trim()).includes(String(currentUser.user_id).trim())
      : false;
    const [reposted, setReposted] = useState(isReposted);
    const [repostCount, setRepostCount] = useState(post.reposts ?? 0);
    const [showComment, setShowComment] = useState(false);
    const [newComment, setNewComment] = useState("");
    const [commentImage, setCommentImage] = useState<File | null>(null);
    const [commentVideo, setCommentVideo] = useState<File | null>(null);

    const date = new Date(post.created_at);
    useEffect(() => {
      const newLiked = Array.isArray(post.liked_by) && currentUser
        ? post.liked_by.map((id: string) => String(id).trim()).includes(String(currentUser.user_id).trim())
        : false;
      setLiked(newLiked);
      const newReposted = Array.isArray(post.reposted_by) && currentUser
        ? post.reposted_by.map((id: string) => String(id).trim()).includes(String(currentUser.user_id).trim())
        : false;
      setReposted(newReposted);
    }, [post.liked_by, post.reposted_by, currentUser]);

    const handleLike = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await fetch(`http://127.0.0.1:8000/posts/${post.post_id}/like`, {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });
        if (response.ok) {
          setLiked(!liked);
          setLikeCount((prev: number) => liked ? prev - 1 : prev + 1);
          await onActionDone();
        }
      } catch (error) {
        console.error('Error liking post:', error);
      }
    };

    const handleRepost = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await fetch(`http://127.0.0.1:8000/posts/${post.post_id}/repost`, {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });
        if (response.ok) {
          setReposted(!reposted);
          setRepostCount((prev: number) => reposted ? prev - 1 : prev + 1);
          await onActionDone();
        }
      } catch (error) {
        console.error('Error reposting:', error);
      }
    };

    const handleComment = async () => {
      if (!newComment.trim()) return;

      try {
        const token = localStorage.getItem('token');
        const formData = new FormData();
        formData.append('content', newComment);
        if (commentImage) formData.append('image', commentImage);
        if (commentVideo) formData.append('video', commentVideo);

        const response = await fetch(`http://127.0.0.1:8000/posts/${post.post_id}/comments`, {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${token}`,
          },
          body: formData
        });

        if (response.ok) {
          setNewComment('');
          setCommentImage(null);
          setCommentVideo(null);
          setShowComment(false);
          await onActionDone();
        }
      } catch (error) {
        console.error('Error posting comment:', error);
      }
    };

    return (
      <div key={post.post_id} className="bg-white text-black p-4 shadow-md w-full rounded-lg border text-black">
        <div className="flex items-center space-x-3">
          <img src={user?.avatar ? `http://127.0.0.1:8000/media/${user.avatar}` : "https://placehold.co/40x40"} alt="Avatar" className="w-10 h-10 rounded-full" />
          <div>
            <div className="flex items-center gap-2">
              <p className="font-semibold">{user?.full_name || "Người dùng"}</p>
              <Link href={`/profile/${user?.user_id}`}>
                <span className="text-sm text-blue-500 hover:underline cursor-pointer">@{user?.username || ""}</span>
              </Link>
              <p className="text-sm text-gray-500">{formatTime(post.created_at)}</p>
            </div>
          </div>
        </div>

        <p className="mt-2">{post.content}</p>
        {/* Hiển thị ảnh nếu có trường image_id hoặc images */}
        {post.image_id && (
          <img src={`http://127.0.0.1:8000/media/${post.image_id}`} alt="Post" className="mt-2 rounded-lg" />
        )}
        {post.images && post.images.length > 0 && (
          <img src={post.images[0]} alt="Post" className="mt-2 rounded-lg" />
        )}

        <div className="flex gap-4 text-gray-500 mt-3">
          <ActionButton 
            icon={<Heart size={18} className={liked ? "text-red-500" : "text-gray-500"} />} 
            count={likeCount} 
            onClick={handleLike}
          />
          <ActionButton 
            icon={<MessageCircle size={18} />} 
            count={post.replies ?? 0} 
            onClick={() => setShowComment(prev => !prev)}
          />
          <ActionButton 
            icon={<Repeat size={18} className={reposted ? "text-green-500" : "text-gray-500"} />} 
            count={repostCount} 
            onClick={handleRepost}
          />
        </div>

        {showComment && (
          <div className="fixed inset-0 flex items-center justify-center bg-black/50">
            <div className="bg-white w-[500px] rounded-xl shadow-lg translate-x-10">
              <div className="flex items-center justify-between p-3 border-b">
                <button className="text-gray-600 hover:text-black">
                  <X size={20} onClick={() => setShowComment(false)} className="cursor-pointer"/>
                </button>
                <p className="text-sm font-semibold">Thread trả lời</p>
                <div></div>
              </div>

              <div className="p-4">
                <div className="flex space-x-3">
                  <img src={user?.avatar ? `http://127.0.0.1:8000/media/${user.avatar}` : "https://placehold.co/40x40"} alt="Avatar" className="w-10 h-10 rounded-full" />
                  <div className="flex-1">
                    <p className="font-semibold text-sm">{user?.full_name || "Người dùng"} <span className="text-gray-500 text-xs">• {post.created_at ? new Date(post.created_at).toLocaleDateString('vi-VN') : ''}</span></p>
                    <p className="text-sm text-gray-800">{post.content}</p>
                  </div>
                </div>
              </div>

              <div className="p-4">
                <div className="flex space-x-3">
                  <img src="https://placehold.co/40x40" alt="Avatar" className="w-10 h-10 rounded-full" />
                  <div className="flex-1">
                    <input
                      type="text"
                      placeholder={`Trả lời ${user?.full_name || "người dùng"}`}
                      className="w-full border-none outline-none bg-transparent text-sm text-gray-800"
                      value={newComment}
                      onChange={(e) => setNewComment(e.target.value)}
                    />
                    <div className="flex space-x-3 text-gray-500 mt-2 items-center">
                      <label>
                        <ImageIcon size={18} className="cursor-pointer hover:text-black" />
                        <input
                          type="file"
                          accept="image/*"
                          style={{ display: "none" }}
                          onChange={e => {
                            const file = e.target.files?.[0] || null;
                            setCommentImage(file);
                          }}
                        />
                      </label>
                      <label>
                        <Video size={18} className="cursor-pointer hover:text-black" />
                        <input
                          type="file"
                          accept="video/*"
                          style={{ display: "none" }}
                          onChange={e => {
                            const file = e.target.files?.[0] || null;
                            setCommentVideo(file);
                          }}
                        />
                      </label>
                      {commentImage && (
                        <div className="relative w-10 h-10">
                          <img
                            src={URL.createObjectURL(commentImage)}
                            alt="preview"
                            className="w-10 h-10 object-cover rounded"
                          />
                          <button
                            type="button"
                            className="absolute top-0 right-0 bg-white rounded-full p-0.5 text-xs text-red-500 border border-gray-300 hover:bg-gray-200"
                            onClick={() => setCommentImage(null)}
                          >
                            ×
                          </button>
                        </div>
                      )}
                      {commentVideo && (
                        <div className="relative w-16 h-10">
                          <video
                            src={URL.createObjectURL(commentVideo)}
                            className="w-16 h-10 object-cover rounded"
                            controls
                          />
                          <button
                            type="button"
                            className="absolute top-0 right-0 bg-white rounded-full p-0.5 text-xs text-red-500 border border-gray-300 hover:bg-gray-200"
                            onClick={() => setCommentVideo(null)}
                          >
                            ×
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-4">
                <button
                  className={`w-full py-2 rounded-lg ${
                    newComment.trim()
                      ? "bg-blue-500 text-white hover:bg-blue-600 cursor-pointer"
                      : "bg-gray-300 text-gray-500 cursor-not-allowed"
                  }`}
                  disabled={!newComment.trim()}
                  onClick={handleComment}
                >
                  Đăng
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
  const ActionButton = ({ icon, count, onClick }: { icon: React.ReactNode, count: number, onClick: () => void }) => (
    <button className="flex items-center space-x-2 hover:text-blue-500" onClick={onClick}>
      {icon}
      <span>{count}</span>
    </button>
  )
  const EmptyState = ({ message }: { message: string }) => (
    <div className="py-8 text-center text-gray-500">
      <p>{message}</p>
    </div>
  )

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  const handleFollow = async () => {
    try {
      const token = localStorage.getItem('token');
      const endpoint = isFollowing ? 'unfollow' : 'follow';
      const response = await fetch(`http://127.0.0.1:8000/users/${userId}/${endpoint}`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
      if (response.ok) {
        setIsFollowing(!isFollowing);
        await fetchProfile();
      }
    } catch (error) {
      console.error('Error following/unfollowing user:', error);
    }
  };

  const handleEditProfile = async () => {
    setEditLoading(true);
    try {
      const token = localStorage.getItem('token');
      const formData = new FormData();
      formData.append("full_name", editData.full_name);
      formData.append("phone_number", editData.phone_number);
      formData.append("username", editData.username);
      formData.append("email", editData.email);
      formData.append("bio", editData.bio);
      if (editData.avatar) {
        formData.append("avatar", editData.avatar);
      }

      const res = await fetch(`http://127.0.0.1:8000/users/${userId}/update`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      if (!res.ok) throw new Error("Cập nhật thất bại");
      const data = await res.json();
      setUser(data.user);
      setShowEditProfile(false);
    } catch (error) {
      alert("Có lỗi xảy ra khi cập nhật hồ sơ!");
    } finally {
      setEditLoading(false);
    }
  };

  if (!loading && !user) {
    notFound()
  }

  return (
    <div className="w-full h-screen bg-gray-100 flex flex-col items-center p-4 text-black">
      <h1 className="text-xl font-bold mb-4">Hồ sơ</h1>
      <div className="max-w-xl w-full h-auto">
        <div className="bg-white rounded-2xl shadow-md p-4 space-y-4">
          {/* Profile header */}
          <div className="flex items-center space-x-4">
            <img src={user?.avatar ? `http://127.0.0.1:8000/media/${user.avatar}` : "https://placehold.co/100x100"} alt="Avatar" className="w-20 h-20 rounded-full" />
            <div>
              <h2 className="text-xl font-bold">{user?.full_name || "username"}</h2>
              <p className="text-gray-500">@{user?.username || "username"}</p>
              <p className="text-gray-500">{user?.bio || "Bio"}</p>
              {currentUser?.user_id === userId && (
                <Pencil size={18} className="cursor-pointer hover:text-blue-500" onClick={() => setShowEditProfile(true)} />
              )}
              <div className="flex space-x-4 mt-2">
                <div>
                  <span className="font-bold">{Array.isArray(posts) ? posts.length : 0}</span> bài viết
                </div>
                <div>
                  <span className="font-bold">{user?.followers?.length || 0}</span> người theo dõi
                </div>
                <div>
                  <span className="font-bold">{user?.following?.length || 0}</span> đang theo dõi
                </div>
              </div>
            </div>
            {currentUser?.user_id !== userId && (
              <button
                className={`px-4 py-2 rounded-lg font-semibold ${
                  isFollowing
                    ? 'bg-gray-200 hover:bg-gray-300 text-gray-800'
                    : 'bg-blue-500 hover:bg-blue-600 text-white'
                }`}
                onClick={handleFollow}
              >
                {isFollowing ? 'Đang theo dõi' : 'Theo dõi'}
              </button>
            )}
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
              className={`px-4 py-2 ${activeTab === 'replies' ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-500'}`}
              onClick={() => handleTabChange('replies')}
            >
              Trả lời
            </button>
            <button
              className={`px-4 py-2 ${activeTab === 'reposts' ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-500'}`}
              onClick={() => handleTabChange('reposts')}
            >
              Đăng lại
            </button>
          </div>

          {/* Content */}
          <div className="space-y-4 overflow-auto max-h-[calc(100vh-290px)]">
            {activeTab === 'posts' && (
              Array.isArray(posts) && posts.length > 0 ? (
                posts.map((post) => (
                  <PostCard key={post.post_id} post={post} onActionDone={fetchProfile} />
                ))
              ) : (
                <div className="py-8 text-center text-gray-500">Không có bài viết nào.</div>
              )
            )}
            {activeTab === 'replies' && (
              Array.isArray(replies) && replies.length > 0 ? (
                replies.map((post) => (
                  <div key={post.post_id} className="bg-white text-black p-4 shadow-md w-full rounded-lg border">
                    {/* Post author info */}
                    <div className="flex items-center space-x-3">
                      <img 
                        src={post.user?.avatar ? `http://127.0.0.1:8000/media/${post.user.avatar}` : "https://placehold.co/40x40"} 
                        alt="Avatar" 
                        className="w-10 h-10 rounded-full" 
                      />
                      <div>
                        <div className="flex items-center gap-2">
                          <p className="font-semibold">{post.user?.full_name || "Người dùng"}</p>
                          <Link href={`/profile/${post.user?.user_id}`}>
                            <span className="text-sm text-blue-500 hover:underline cursor-pointer">@{post.user?.username || ""}</span>
                          </Link>
                          <p className="text-sm text-gray-500">{formatTime(post.created_at)}</p>
                        </div>
                      </div>
                    </div>

                    <Link href={`/comment/${post.post_id}`}>
                      <p className="mt-2">{post.content}</p>
                    </Link>
                    {post.image_id && (
                      <img src={`http://127.0.0.1:8000/media/${post.image_id}`} alt="Post" className="mt-2 rounded-lg" />
                    )}

                    {/* User's comments */}
                    {post.userComments?.map((comment: any) => (
                      <div key={comment.comment_id} className="mt-4 p-3 bg-gray-50 rounded-lg">
                        <div className="flex items-center space-x-2">
                          <img src={user?.avatar ? `http://127.0.0.1:8000/media/${user.avatar}` : "https://placehold.co/40x40"} alt="Avatar" className="w-8 h-8 rounded-full" />
                          <div>
                            <p className="text-sm font-semibold">{user?.full_name || "Người dùng"}</p>
                            <p className="text-xs text-gray-500">{formatTime(comment.created_at)}</p>
                          </div>
                        </div>
                        <p className="mt-2 text-sm">{comment.content}</p>
                        {comment.image_id && (
                          <img src={`http://127.0.0.1:8000/media/${comment.image_id}`} alt="Comment" className="mt-2 rounded-lg max-h-40 object-cover" />
                        )}
                      </div>
                    ))}
                  </div>
                ))
              ) : (
                <div className="py-8 text-center text-gray-500">Không có trả lời nào.</div>
              )
            )}
            {activeTab === 'reposts' && (
              Array.isArray(reposts) && reposts.length > 0 ? (
                reposts.map((post) => (
                  <div key={post.post_id} className="bg-white text-black p-4 shadow-md w-full rounded-lg border">
                    {/* Post author info */}
                    <div className="flex items-center space-x-3">
                      <img 
                        src={post.user?.avatar ? `http://127.0.0.1:8000/media/${post.user.avatar}` : "https://placehold.co/40x40"} 
                        alt="Avatar" 
                        className="w-10 h-10 rounded-full" 
                      />
                      <div>
                        <div className="flex items-center gap-2">
                          <p className="font-semibold">{post.user?.full_name || "Người dùng"}</p>
                          <Link href={`/profile/${post.user?.user_id}`}>
                            <span className="text-sm text-blue-500 hover:underline cursor-pointer">@{post.user?.username || ""}</span>
                          </Link>
                          <p className="text-sm text-gray-500">{formatTime(post.created_at)}</p>
                        </div>
                      </div>
                    </div>

                    <Link href={`/comment/${post.post_id}`}>
                      <p className="mt-2">{post.content}</p>
                    </Link>
                    {post.image_id && (
                      <img src={`http://127.0.0.1:8000/media/${post.image_id}`} alt="Post" className="mt-2 rounded-lg" />
                    )}
                    {post.video_id && (
                      <video src={`http://127.0.0.1:8000/media/${post.video_id}`} controls className="mt-2 rounded-lg w-full" />
                    )}

                    <div className="flex gap-4 text-gray-500 mt-3">
                      <ActionButton 
                        icon={<Heart size={18} className={post.liked_by?.includes(currentUser?.user_id) ? "text-red-500" : "text-gray-500"} />} 
                        count={post.likes || 0} 
                        onClick={() => {}} 
                      />
                      <ActionButton 
                        icon={<MessageCircle size={18} />} 
                        count={post.comments || 0} 
                        onClick={() => {}} 
                      />
                      <ActionButton 
                        icon={<Repeat size={18} className="text-green-500" />} 
                        count={post.reposts || 0} 
                        onClick={() => {}} 
                      />
                    </div>
                  </div>
                ))
              ) : (
                <div className="py-8 text-center text-gray-500">Không có bài đăng lại nào.</div>
              )
            )}
          </div>
        </div>
      </div>
      {showEditProfile && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <div className="bg-white p-6 rounded-lg w-[400px]">
            <h2 className="text-lg font-bold mb-4">Chỉnh sửa hồ sơ</h2>
            <input
              className="w-full mb-2 p-2 border rounded"
              placeholder="Họ tên"
              value={editData.full_name}
              onChange={e => setEditData({ ...editData, full_name: e.target.value })}
            />
            <input
              className="w-full mb-2 p-2 border rounded"
              placeholder="Số điện thoại"
              value={editData.phone_number}
              onChange={e => setEditData({ ...editData, phone_number: e.target.value })}
            />
            <input
              className="w-full mb-2 p-2 border rounded"
              placeholder="Username"
              value={editData.username}
              onChange={e => setEditData({ ...editData, username: e.target.value })}
            />
            <input
              className="w-full mb-2 p-2 border rounded"
              placeholder="Email"
              value={editData.email}
              onChange={e => setEditData({ ...editData, email: e.target.value })}
            />
            <textarea
              className="w-full mb-2 p-2 border rounded"
              placeholder="Bio"
              value={editData.bio}
              onChange={e => setEditData({ ...editData, bio: e.target.value })}
            />
            <div className="flex items-center gap-2 mb-2 p-2 border rounded cursor-pointer">
              <ImageIcon size={18} className="cursor-pointer hover:text-black" />
              <input
                type="file"
                accept="image/*"
                className="hidden"
                id="avatar-upload"
                onChange={e => setEditData({ ...editData, avatar: e.target.files?.[0] || null })}
              />
              <label htmlFor="avatar-upload" className="cursor-pointer">
                Chọn ảnh đại diện
              </label>
            {editData.avatar && (
              <div className="relative w-10 h-10 ml-2">
                <img
                  src={URL.createObjectURL(editData.avatar)}
                  alt="Avatar preview"
                  className="w-10 h-10 object-cover rounded-full"
                />
                <button
                  type="button"
                  className="absolute -top-1 -right-1 bg-white rounded-full p-0.5 text-xs text-red-500 border border-gray-300 hover:bg-gray-200"
                  onClick={() => setEditData({ ...editData, avatar: null })}
                >
                  ×
                </button>
              </div>
            )}
            </div>
            <div className="flex justify-end gap-2 mt-4">
              <button
                className="px-4 py-2 bg-gray-300 rounded"
                onClick={() => setShowEditProfile(false)}
              >
                Hủy
              </button>
              <button
                className="px-4 py-2 bg-blue-500 text-white rounded"
                onClick={handleEditProfile}
                disabled={editLoading}
              >
                {editLoading ? "Đang lưu..." : "Lưu"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
