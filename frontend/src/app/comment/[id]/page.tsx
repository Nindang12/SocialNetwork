"use client";

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import axios from "axios";
import { MessageCircle, Heart, Repeat, Image, ArrowLeftIcon, Video } from "lucide-react";
import { ReactNode } from "react";
import Link from "next/link";
export default function CommentPage() {
  const router = useRouter();
  const params = useParams();
  const id = params.id;
  const [newComment, setNewComment] = useState("");
  const [showReply, setShowReply] = useState(false);
  const [replyTo, setReplyTo] = useState("");
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  const [reposted, setReposted] = useState(false);
  const [repostCount, setRepostCount] = useState(0);
  const [comments, setComments] = useState(0);
  const [showComment, setShowComment] = useState(false);
  const [replyLikes, setReplyLikes] = useState<{ [key: string]: boolean }>({});
  const [replyLikeCounts, setReplyLikeCounts] = useState<{ [key: string]: number }>({});
  const [replyReplies, setReplyReplies] = useState<{ [key: string]: any[] }>({});
  const [replyInputs, setReplyInputs] = useState<{ [key: string]: string }>({});
  const [showInputReply, setShowInputReply] = useState<{ [key: string]: boolean }>({});
  const [post, setPost] = useState<any>(null);
  const [user, setUser] = useState<any>(null);
  const [currentUser, setCurrentUser] = useState<any>(null);
  const [commentList, setCommentList] = useState<any[]>([]);
  const [commentLikes, setCommentLikes] = useState<{ [key: string]: boolean }>({});
  const [commentLikeCounts, setCommentLikeCounts] = useState<{ [key: string]: number }>({});
  const [commentImage, setCommentImage] = useState<File | null>(null);
  const [commentVideo, setCommentVideo] = useState<File | null>(null);
  const [showMedia, setShowMedia] = useState<{ [key: string]: boolean }>({});
  const [replyImages, setReplyImages] = useState<{ [key: string]: File | null }>({});
  const [replyVideos, setReplyVideos] = useState<{ [key: string]: File | null }>({});
  const [commentError, setCommentError] = useState("");

  const handleComment = async () => {
    if (!newComment.trim()) {
      setCommentError('Vui lòng nhập nội dung bình luận!');
      return;
    }
    setCommentError("");
    try {
      const token = localStorage.getItem('token');
      const formData = new FormData();
      formData.append("content", newComment);
      if (commentImage) {
        formData.append("image", commentImage);
      }
      if (commentVideo) {
        formData.append("video", commentVideo);
      }
      const response = await fetch(`http://127.0.0.1:8000/posts/${id}/comment`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
        body: formData,
      });
      if (!response.ok) throw new Error('Failed to comment');
      const data = await response.json();
      setCommentList(prev => [...prev, data]);
      setCommentImage(null);
      setCommentVideo(null);
    } catch (error) {
      console.error('Error commenting:', error);
    }
  };

  const handleReply = (username: string) => {
    // TODO: Implement reply functionality
  };

  const toggleReplyInput = async (commentId: string) => {
    setShowInputReply(prev => ({
      ...prev,
      [commentId]: !prev[commentId]
    }));

    // Nếu chưa có reply cho comment này thì fetch
    if (!replyReplies[commentId]) {
      try {
        const token = localStorage.getItem('token');
        const res = await fetch(`http://127.0.0.1:8000/comments/${commentId}/replied`, {
          headers: { 'Authorization': `Bearer ${token}` }
        });
        if (res.ok) {
          const data = await res.json();
          setReplyReplies(prev => ({
            ...prev,
            [commentId]: data
          }));
        }
      } catch (err) {
        console.error("Error fetching replies:", err);
      }
    }
  };

  const handleLike = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`http://127.0.0.1:8000/posts/${id}/like`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      });

      if (!response.ok) throw new Error('Failed to like post');
      const data = await response.json();

      if (data && data.liked_by && currentUser) {
        const userHasLiked = data.liked_by
          .map((id: string) => String(id).trim())
          .includes(String(currentUser.user_id).trim());
        setLiked(userHasLiked);
        setLikeCount(data.likes ?? 0);
      }
    } catch (error) {
      console.error('Error liking post:', error);
    }
  };

  const handleRepost = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`http://127.0.0.1:8000/posts/${id}/repost`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      });

      if (!response.ok) throw new Error('Failed to repost');
      const data = await response.json();

      if (data && data.reposted_by && currentUser) {
        const userHasReposted = data.reposted_by
          .map((id: string) => String(id).trim())
          .includes(String(currentUser.user_id).trim());
        setReposted(userHasReposted);
        setRepostCount(data.reposts ?? 0);
      }
    } catch (error) {
      console.error('Error reposting:', error);
    }
  };

  const handleReplyLike = (replyId: string) => {
    setReplyLikes((prev) => ({
      ...prev,
      [replyId]: !prev[replyId],
    }));
    setReplyLikeCounts((prev) => ({
      ...prev,
      [replyId]: prev[replyId] ? prev[replyId] - 1 : (prev[replyId] || 0) + 1,
    }));
  };

  const handleReplyInputChange = (replyId: string, value: string) => {
    setReplyInputs((prev) => ({
      ...prev,
      [replyId]: value,
    }));
  };

  const handleReplySubmit = async (postId: number, commentId: string) => {
    try {
      const token = localStorage.getItem('token');
      const formData = new FormData();
      formData.append("content", replyInputs[commentId]);
      if (replyImages[commentId]) {
        formData.append("image", replyImages[commentId]!);
      }
      if (replyVideos[commentId]) {
        formData.append("video", replyVideos[commentId]!);
      }
      const response = await fetch(`http://127.0.0.1:8000/comments/${commentId}/reply`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
        body: formData,
      });
      if (!response.ok) throw new Error('Failed to reply');
      const data = await response.json();
      setReplyReplies(prev => ({
        ...prev,
        [commentId]: [...(prev[commentId] || []), data],
      }));
      setReplyInputs(prev => ({
        ...prev,
        [commentId]: "",
      }));
      setReplyImages(prev => ({
        ...prev,
        [commentId]: null,
      }));
      setReplyVideos(prev => ({
        ...prev,
        [commentId]: null,
      }));
    } catch (error) {
      console.error('Error replying:', error);
    }
  };

  const handleLikeComment = async (commentId: string) => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`http://127.0.0.1:8000/comments/${commentId}/like`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      });
      if (!response.ok) throw new Error('Failed to like comment');
      const data = await response.json();

      // data.liked_by là mảng user_id đã like comment này
      const userHasLiked = data.liked_by
        .map((id: string) => String(id).trim())
        .includes(String(currentUser.user_id).trim());

      setCommentLikes(prev => ({ ...prev, [commentId]: userHasLiked }));
      setCommentLikeCounts(prev => ({ ...prev, [commentId]: data.likes ?? 0 }));
    } catch (error) {
      console.error('Error liking comment:', error);
    }
  };

  const fetchReplies = async (commentId: string) => {
    try {
      const token = localStorage.getItem('token');
      const res = await fetch(`http://127.0.0.1:8000/comments/${commentId}/replied`, {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      if (res.ok) {
        const data = await res.json();
        setReplyReplies(prev => ({
          ...prev,
          [commentId]: data
        }));
      }
    } catch (err) {
      console.error("Error fetching replies:", err);
    }
  };

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

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get(`http://127.0.0.1:8000/posts/${id}`, {
          headers: { 'Authorization': `Bearer ${token}` }
        });
        setPost(response.data);

        // Kiểm tra liked_by và reposted_by nếu đã có currentUser
        if (response.data.liked_by && currentUser) {
          const userHasLiked = response.data.liked_by
            .map((id: string) => String(id).trim())
            .includes(String(currentUser.user_id).trim());
          setLiked(userHasLiked);
          setLikeCount(response.data.likes ?? 0);
        } else {
          setLiked(false);
          setLikeCount(response.data.likes ?? 0);
        }

        if (response.data.reposted_by && currentUser) {
          const userHasReposted = response.data.reposted_by
            .map((id: string) => String(id).trim())
            .includes(String(currentUser.user_id).trim());
          setReposted(userHasReposted);
          setRepostCount(response.data.reposts ?? 0);
        } else {
          setReposted(false);
          setRepostCount(response.data.reposts ?? 0);
        }
      } catch (err) {
        console.error("Error fetching post:", err);
      }
    };
    fetchPost();
  }, [id, currentUser]);

  useEffect(() => {
    if (!post?.user_id) return;
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get(`http://127.0.0.1:8000/users/${post.user_id}`, {
          headers: { 'Authorization': `Bearer ${token}` }
        });
        setUser(response.data.user);
      } catch (err) {
        console.error("Error fetching user:", err);
      }
    };
    fetchUser();
  }, [post]);

  useEffect(() => {
    const fetchCurrentUser = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get("http://127.0.0.1:8000/users/me", {
          headers: { 'Authorization': `Bearer ${token}` }
        });
        setCurrentUser(response.data.user);
      } catch (err) {
        console.error("Error fetching current user:", err);
      }
    };
    fetchCurrentUser();
  }, []);

  useEffect(() => {
    if (!post?._id && !post?.post_id && id) return;
    const fetchComments = async () => {
      try {
        const token = localStorage.getItem('token');
        const res = await axios.get(
          `http://127.0.0.1:8000/posts/${post.post_id || post._id || id}/comments`,
          { headers: { 'Authorization': `Bearer ${token}` } }
        );
        setCommentList(res.data);

        // Cập nhật trạng thái like cho từng comment
        if (currentUser) {
          const likesObj: { [key: string]: boolean } = {};
          const likeCountsObj: { [key: string]: number } = {};
          res.data.forEach((cmt: any) => {
            likesObj[cmt.comment_id] = cmt.liked_by?.includes(currentUser.user_id);
            likeCountsObj[cmt.comment_id] = cmt.likes ?? 0;
          });
          setCommentLikes(likesObj);
          setCommentLikeCounts(likeCountsObj);
        }
      } catch (err) {
        console.error("Error fetching comments:", err);
      }
    };
    fetchComments();
  }, [post, id, currentUser]);

  // Thêm logic cập nhật/xóa comment
  const handleEditComment = (commentId: string, newContent: string) => {
    setCommentList(prev => prev.map(cmt =>
      cmt.comment_id === commentId ? { ...cmt, content: newContent } : cmt
    ));
    // Nếu là reply thì cập nhật trong replyReplies
    setReplyReplies(prev => {
      const updated = { ...prev };
      Object.keys(updated).forEach(key => {
        updated[key] = updated[key]?.map((reply: any) =>
          reply.comment_id === commentId ? { ...reply, content: newContent } : reply
        );
      });
      return updated;
    });
  };
  const handleDeleteComment = (commentId: string) => {
    setCommentList(prev => prev.filter(cmt => cmt.comment_id !== commentId));
    setReplyReplies(prev => {
      const updated = { ...prev };
      Object.keys(updated).forEach(key => {
        updated[key] = updated[key]?.filter((reply: any) => reply.comment_id !== commentId);
      });
      return updated;
    });
  };

  return (
    <div className="w-full h-screen bg-gray-100 flex flex-col items-center p-4 text-black">
      <div className="min-w-xl flex items-center justify-between gap-4 mb-4">
        <ArrowLeftIcon size={24} className="cursor-pointer" onClick={() => window.history.back()} />
        <h1 className="text-xl font-bold mb-4">Bình luận</h1>
        <div></div>
      </div>
      <div className="max-w-xl w-full h-auto">
        <div className="bg-white rounded-2xl shadow-md p-4 space-y-4">
          {/* Post content */}
          <div className="border-b pb-4">
            <div className="flex items-center space-x-3">
              <img src={user?.avatar ? `http://127.0.0.1:8000/media/${user.avatar}` : "https://placehold.co/40x40"} alt="Avatar" className="w-10 h-10 rounded-full" />
              <div>
                <Link href={`/profile/${user?.user_id}`}>
                  <p className="text-sm font-semibold text-black hover:underline cursor-pointer">
                    {user?.username || "username"}
                  </p>
                </Link>
                <p className="text-sm text-gray-500">{post?.created_at ? formatTime(post.created_at) : "time"}</p>
              </div>
            </div>
            <p className="mt-2">{post?.content || "content"}</p>
            {post?.image && <img src={post.image} alt="Post" className="mt-2 rounded-lg" />}

            {/* Action Buttons */}
            <div className="flex gap-4 text-gray-500 mt-3">
              <ActionButton 
                icon={<Heart size={18} className={liked ? "text-red-500" : "text-gray-500"} />} 
                count={likeCount} 
                onClick={handleLike}
              />
              <ActionButton 
                icon={<MessageCircle size={18} />} 
                count={post?.comments ?? 0} 
                onClick={() => {}} // hoặc mở khung comment nếu muốn
              />
              <ActionButton 
                icon={<Repeat size={18} className={reposted ? "text-green-500" : "text-gray-500"} />} 
                count={repostCount} 
                onClick={handleRepost}
              />
            </div>
          </div>

          {/* Comments list */}
          <div className="space-y-4 overflow-y-auto p-2 max-h-[440px]">
            {commentList.length === 0 && (
              <div className="text-gray-400 text-sm">Chưa có bình luận nào.</div>
            )}
            {commentList.map((cmt: any) => (
              <CommentItem
                key={cmt.comment_id || cmt._id}
                cmt={cmt}
                currentUser={currentUser}
                commentLikes={commentLikes}
                commentLikeCounts={commentLikeCounts}
                handleLikeComment={handleLikeComment}
                showInputReply={showInputReply}
                toggleReplyInput={toggleReplyInput}
                replyInputs={replyInputs}
                setReplyInputs={setReplyInputs}
                handleReplySubmit={handleReplySubmit}
                replyReplies={replyReplies}
                fetchReplies={fetchReplies}
                formatTime={formatTime}
                onEditComment={handleEditComment}
                onDeleteComment={handleDeleteComment}
                showMedia={showMedia}
                setShowMedia={setShowMedia}
                replyImages={replyImages}
                setReplyImages={setReplyImages}
                replyVideos={replyVideos}
                setReplyVideos={setReplyVideos}
              />
            ))}
          </div>

          {/* Comment input */}
          <div className="flex items-center space-x-3">
            <img src={currentUser?.avatar ? `http://127.0.0.1:8000/media/${currentUser.avatar}` : "https://placehold.co/40x40"} alt="Avatar" className="w-10 h-10 rounded-full" />
            <input type="text" placeholder="Viết bình luận..." className="flex-1 p-2 border rounded-lg focus:outline-none" value={newComment} onChange={(e) => setNewComment(e.target.value)} />
            
            <div className="flex items-center gap-2">
              <label className="cursor-pointer">
                <Image size={20} className="hover:text-black" />
                <input type="file" accept="image/*" style={{ display: 'none' }} onChange={e => { const file = e.target.files?.[0] || null; setCommentImage(file); }} />
              </label>
              <label className="cursor-pointer">
                <Video size={20} className="hover:text-black" />
                <input type="file" accept="video/*" style={{ display: 'none' }} onChange={e => { const file = e.target.files?.[0] || null; setCommentVideo(file); }} />
              </label>
              {commentImage && (
                <div className="relative w-10 h-10">
                  <img src={URL.createObjectURL(commentImage)} alt="preview" className="w-10 h-10 object-cover rounded" />
                  <button type="button" className="absolute top-0 right-0 bg-white rounded-full p-0.5 text-xs text-red-500 border border-gray-300 hover:bg-gray-200" onClick={() => setCommentImage(null)}>×</button>
                </div>
              )}
              {commentVideo && (
                <div className="relative w-16 h-10">
                  <video src={URL.createObjectURL(commentVideo)} className="w-16 h-10 object-cover rounded" controls />
                  <button type="button" className="absolute top-0 right-0 bg-white rounded-full p-0.5 text-xs text-red-500 border border-gray-300 hover:bg-gray-200" onClick={() => setCommentVideo(null)}>×</button>
                </div>
              )}
            </div>

            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg font-semibold" onClick={async () => { await handleComment(); setNewComment(''); }}>Đăng</button>
          </div>
          {commentError && <div className="text-red-500 text-xs mt-1">{commentError}</div>}

        </div>
      </div>
    </div>
  );
}

function ActionButton({ icon, count, onClick }: { icon: ReactNode; count: number; onClick: () => void }) {
  return (
    <button onClick={onClick} className="flex items-center space-x-1 text-gray-500 hover:text-black">
      {icon}
      <span className="text-sm">{count}</span>
    </button>
  );
}

function CommentItem({
  cmt,
  currentUser,
  commentLikes,
  commentLikeCounts,
  handleLikeComment,
  showInputReply,
  toggleReplyInput,
  replyInputs,
  setReplyInputs,
  handleReplySubmit,
  replyReplies,
  fetchReplies,
  formatTime,
  depth = 0,
  onEditComment,
  onDeleteComment,
  showMedia,
  setShowMedia,
  replyImages,
  setReplyImages,
  replyVideos,
  setReplyVideos,
}: any) {
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(cmt.content);
  const [commentUser, setCommentUser] = useState<any>(null);

  // Fetch user info for comment
  useEffect(() => {
    const fetchCommentUser = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get(`http://127.0.0.1:8000/users/${cmt.user_id}`, {
          headers: { 'Authorization': `Bearer ${token}` }
        });
        setCommentUser(response.data.user);
      } catch (err) {
        console.error("Error fetching comment user:", err);
      }
    };
    fetchCommentUser();
  }, [cmt.user_id]);

  // Hàm cập nhật comment
  const handleEditSave = async () => {
    try {
      const token = localStorage.getItem('token');
      const formData = new FormData();
      formData.append('content', editValue);
      const response = await fetch(`http://127.0.0.1:8000/comments/${cmt.comment_id}`, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
        body: formData,
      });
      if (!response.ok) throw new Error('Failed to edit comment');
      const data = await response.json();
      setIsEditing(false);
      if (onEditComment) onEditComment(cmt.comment_id, data.content);
    } catch (error) {
      console.error('Error editing comment:', error);
    }
  };

  // Hàm xóa comment
  const handleDelete = async () => {
    if (!window.confirm('Bạn có chắc muốn xóa bình luận này?')) return;
    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`http://127.0.0.1:8000/comments/${cmt.comment_id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
      if (!response.ok) throw new Error('Failed to delete comment');
      if (onDeleteComment) onDeleteComment(cmt.comment_id);
    } catch (error) {
      console.error('Error deleting comment:', error);
    }
  };

  return (
    <div
      style={{ marginLeft: depth * 10, maxWidth: "100%" }}
      className="flex flex-col items-start mt-2 border-b pb-2 w-full"
    >
      <div className="flex items-center gap-2 w-full">
        <img src={commentUser?.avatar ? `http://127.0.0.1:8000/media/${commentUser.avatar}` : "https://placehold.co/40x40"} alt="Avatar" className="w-8 h-8 rounded-full" />
        <span className="font-semibold text-sm">{commentUser?.username || "user"}</span>
        <span className="text-xs text-gray-400">
          {cmt.created_at ? formatTime(cmt.created_at) : "--"}
        </span>
        {/* Edit/Delete option */}
        {currentUser?.user_id === cmt.user_id && (
          <div className="ml-auto flex gap-2">
            {!isEditing && (
              <>
                <button className="text-blue-500 text-xs" onClick={() => setIsEditing(true)}>Sửa</button>
                <button className="text-red-500 text-xs" onClick={handleDelete}>Xóa</button>
              </>
            )}
          </div>
        )}
      </div>
      <div className="flex-1 w-full">
        {isEditing ? (
          <div className="flex gap-2 w-full mt-1">
            <input
              type="text"
              className="flex-1 p-2 border rounded-lg text-sm"
              value={editValue}
              onChange={e => setEditValue(e.target.value)}
            />
            <button className="bg-blue-500 text-white px-2 py-1 rounded text-xs" onClick={handleEditSave}>Lưu</button>
            <button className="bg-gray-300 text-black px-2 py-1 rounded text-xs" onClick={() => { setIsEditing(false); setEditValue(cmt.content); }}>Hủy</button>
          </div>
        ) : (
          <div className="text-sm mt-1 break-words">{cmt.content}</div>
        )}
        {/* Hiển thị media giống bên post: hiển thị cả ảnh và video nếu có */}
        {cmt.image_id && (
          <img
            src={`http://127.0.0.1:8000/media/${cmt.image_id}`}
            alt="Comment"
            className="mt-2 rounded-lg"
          />
        )}
        {cmt.video_id && (
          <video
            src={`http://127.0.0.1:8000/media/${cmt.video_id}?is_image=false`}
            controls
            className="mt-2 rounded-lg w-full"
          />
        )}
      </div>
      <div className="flex gap-4 text-gray-500 mt-3">
        <ActionButton 
          icon={<Heart size={18} className={commentLikes[cmt.comment_id] ? "text-red-500" : "text-gray-500"} />} 
          count={commentLikeCounts[cmt.comment_id] ?? 0} 
          onClick={() => handleLikeComment(cmt.comment_id)}
        />
        <ActionButton 
          icon={<MessageCircle size={18} />} 
          count={cmt.replies ?? 0} 
          onClick={async () => {
            toggleReplyInput(cmt.comment_id);
            if (!replyReplies[cmt.comment_id]) await fetchReplies(cmt.comment_id);
          }}
        />
      </div>
      {/* Render reply đệ quy */}
      {showInputReply[cmt.comment_id] && replyReplies[cmt.comment_id]?.map((reply: any) => (
        <CommentItem
          key={reply.comment_id || reply._id || reply.id}
          cmt={{
            ...reply,
            created_at: reply.created_at || reply.createdAt || reply.timestamp
          }}
          currentUser={currentUser}
          commentLikes={commentLikes}
          commentLikeCounts={commentLikeCounts}
          handleLikeComment={handleLikeComment}
          showInputReply={showInputReply}
          toggleReplyInput={toggleReplyInput}
          replyInputs={replyInputs}
          setReplyInputs={setReplyInputs}
          handleReplySubmit={handleReplySubmit}
          replyReplies={replyReplies}
          fetchReplies={fetchReplies}
          formatTime={formatTime}
          depth={depth + 1}
          onEditComment={onEditComment}
          onDeleteComment={onDeleteComment}
          showMedia={showMedia}
          setShowMedia={setShowMedia}
          replyImages={replyImages}
          setReplyImages={setReplyImages}
          replyVideos={replyVideos}
          setReplyVideos={setReplyVideos}
        />
      ))}
      {/* Input reply */}
      {showInputReply[cmt.comment_id] && (
        <div className="flex items-start space-x-2 mt-2 w-[90%]">
          <img src={currentUser?.avatar ? `http://127.0.0.1:8000/media/${currentUser.avatar}` : "https://placehold.co/32x32"} alt="Avatar" className="w-8 h-8 rounded-full" />
          <input
            type="text"
            className="flex-1 p-2 border rounded-lg text-sm"
            placeholder="Trả lời bình luận..."
            value={replyInputs[cmt.comment_id] || ""}
            onChange={e => setReplyInputs((prev: any) => ({ ...prev, [cmt.comment_id]: e.target.value }))}
          />
          {/* Nút chọn ảnh */}
          <label className="cursor-pointer">
            <Image size={20} className="hover:text-black" />
            <input
              type="file"
              accept="image/*"
              style={{ display: 'none' }}
              onChange={e => {
                const file = e.target.files?.[0] || null;
                setReplyImages((prev: any) => ({
                  ...prev,
                  [cmt.comment_id]: file,
                }));
              }}
            />
          </label>
          <label className="cursor-pointer">
            <Video size={20} className="hover:text-black" />
            <input
              type="file"
              accept="video/*"
              style={{ display: 'none' }}
              onChange={e => {
                const file = e.target.files?.[0] || null;
                setReplyVideos((prev: any) => ({
                  ...prev,
                  [cmt.comment_id]: file,
                }));
              }}
            />
          </label>
          {/* Hiển thị preview ảnh nếu có */}
          {replyImages[cmt.comment_id] && (
            <div className="relative w-10 h-10 ml-1">
              <img
                src={URL.createObjectURL(replyImages[cmt.comment_id])}
                alt="preview"
                className="w-10 h-10 object-cover rounded"
              />
              <button
                type="button"
                className="absolute top-0 right-0 bg-white rounded-full p-0.5 text-xs text-red-500 border border-gray-300 hover:bg-gray-200"
                onClick={() => setReplyImages((prev: any) => ({
                  ...prev,
                  [cmt.comment_id]: null,
                }))}
              >
                ×
              </button>
            </div>
          )}
          {/* Hiển thị preview video nếu có */}
          {replyVideos[cmt.comment_id] && (
            <div className="relative w-16 h-10 ml-1">
              <video
                src={URL.createObjectURL(replyVideos[cmt.comment_id])}
                className="w-16 h-10 object-cover rounded"
                controls
              />
              <button
                type="button"
                className="absolute top-0 right-0 bg-white rounded-full p-0.5 text-xs text-red-500 border border-gray-300 hover:bg-gray-200"
                onClick={() => setReplyVideos((prev: any) => ({
                  ...prev,
                  [cmt.comment_id]: null,
                }))}
              >
                ×
              </button>
            </div>
          )}
          <button
            className="bg-blue-500 text-white px-3 py-1 rounded-lg text-sm"
            onClick={() => handleReplySubmit(cmt.post_id, cmt.comment_id)}
          >
            Gửi
          </button>
        </div>
      )}
    </div>
  );
}
