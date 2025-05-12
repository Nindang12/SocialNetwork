(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_app_comment_[id]_page_tsx_b1af7596._.js", {

"[project]/src/app/comment/[id]/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>CommentPage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/message-circle.js [app-client] (ecmascript) <export default as MessageCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/heart.js [app-client] (ecmascript) <export default as Heart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$repeat$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Repeat$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/repeat.js [app-client] (ecmascript) <export default as Repeat>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Image$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/image.js [app-client] (ecmascript) <export default as Image>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeftIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-client] (ecmascript) <export default as ArrowLeftIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$video$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Video$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/video.js [app-client] (ecmascript) <export default as Video>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function CommentPage() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"])();
    const id = params.id;
    const [newComment, setNewComment] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [showReply, setShowReply] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [replyTo, setReplyTo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [liked, setLiked] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [likeCount, setLikeCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [reposted, setReposted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [repostCount, setRepostCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [comments, setComments] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [showComment, setShowComment] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [replyLikes, setReplyLikes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [replyLikeCounts, setReplyLikeCounts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [replyReplies, setReplyReplies] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [replyInputs, setReplyInputs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [showInputReply, setShowInputReply] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [post, setPost] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [currentUser, setCurrentUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [commentList, setCommentList] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [commentLikes, setCommentLikes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [commentLikeCounts, setCommentLikeCounts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [commentImage, setCommentImage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [commentVideo, setCommentVideo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [showMedia, setShowMedia] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [replyImages, setReplyImages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [replyVideos, setReplyVideos] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [commentError, setCommentError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const handleComment = async ()=>{
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
                    'Authorization': `Bearer ${token}`
                },
                body: formData
            });
            if (!response.ok) throw new Error('Failed to comment');
            const data = await response.json();
            setCommentList((prev)=>[
                    ...prev,
                    data
                ]);
            setCommentImage(null);
            setCommentVideo(null);
        } catch (error) {
            console.error('Error commenting:', error);
        }
    };
    const handleReply = (username)=>{
    // TODO: Implement reply functionality
    };
    const toggleReplyInput = async (commentId)=>{
        setShowInputReply((prev)=>({
                ...prev,
                [commentId]: !prev[commentId]
            }));
        // Nếu chưa có reply cho comment này thì fetch
        if (!replyReplies[commentId]) {
            try {
                const token = localStorage.getItem('token');
                const res = await fetch(`http://127.0.0.1:8000/comments/${commentId}/replied`, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
                if (res.ok) {
                    const data = await res.json();
                    setReplyReplies((prev)=>({
                            ...prev,
                            [commentId]: data
                        }));
                }
            } catch (err) {
                console.error("Error fetching replies:", err);
            }
        }
    };
    const handleLike = async ()=>{
        try {
            const token = localStorage.getItem('token');
            const response = await fetch(`http://127.0.0.1:8000/posts/${id}/like`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            });
            if (!response.ok) throw new Error('Failed to like post');
            const data = await response.json();
            if (data && data.liked_by && currentUser) {
                const userHasLiked = data.liked_by.map((id)=>String(id).trim()).includes(String(currentUser.user_id).trim());
                setLiked(userHasLiked);
                setLikeCount(data.likes ?? 0);
            }
        } catch (error) {
            console.error('Error liking post:', error);
        }
    };
    const handleRepost = async ()=>{
        try {
            const token = localStorage.getItem('token');
            const response = await fetch(`http://127.0.0.1:8000/posts/${id}/repost`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            });
            if (!response.ok) throw new Error('Failed to repost');
            const data = await response.json();
            if (data && data.reposted_by && currentUser) {
                const userHasReposted = data.reposted_by.map((id)=>String(id).trim()).includes(String(currentUser.user_id).trim());
                setReposted(userHasReposted);
                setRepostCount(data.reposts ?? 0);
            }
        } catch (error) {
            console.error('Error reposting:', error);
        }
    };
    const handleReplyLike = (replyId)=>{
        setReplyLikes((prev)=>({
                ...prev,
                [replyId]: !prev[replyId]
            }));
        setReplyLikeCounts((prev)=>({
                ...prev,
                [replyId]: prev[replyId] ? prev[replyId] - 1 : (prev[replyId] || 0) + 1
            }));
    };
    const handleReplyInputChange = (replyId, value)=>{
        setReplyInputs((prev)=>({
                ...prev,
                [replyId]: value
            }));
    };
    const handleReplySubmit = async (postId, commentId)=>{
        try {
            const token = localStorage.getItem('token');
            const formData = new FormData();
            formData.append("content", replyInputs[commentId]);
            if (replyImages[commentId]) {
                formData.append("image", replyImages[commentId]);
            }
            if (replyVideos[commentId]) {
                formData.append("video", replyVideos[commentId]);
            }
            const response = await fetch(`http://127.0.0.1:8000/comments/${commentId}/reply`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`
                },
                body: formData
            });
            if (!response.ok) throw new Error('Failed to reply');
            const data = await response.json();
            setReplyReplies((prev)=>({
                    ...prev,
                    [commentId]: [
                        ...prev[commentId] || [],
                        data
                    ]
                }));
            setReplyInputs((prev)=>({
                    ...prev,
                    [commentId]: ""
                }));
            setReplyImages((prev)=>({
                    ...prev,
                    [commentId]: null
                }));
            setReplyVideos((prev)=>({
                    ...prev,
                    [commentId]: null
                }));
        } catch (error) {
            console.error('Error replying:', error);
        }
    };
    const handleLikeComment = async (commentId)=>{
        try {
            const token = localStorage.getItem('token');
            const response = await fetch(`http://127.0.0.1:8000/comments/${commentId}/like`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            });
            if (!response.ok) throw new Error('Failed to like comment');
            const data = await response.json();
            // data.liked_by là mảng user_id đã like comment này
            const userHasLiked = data.liked_by.map((id)=>String(id).trim()).includes(String(currentUser.user_id).trim());
            setCommentLikes((prev)=>({
                    ...prev,
                    [commentId]: userHasLiked
                }));
            setCommentLikeCounts((prev)=>({
                    ...prev,
                    [commentId]: data.likes ?? 0
                }));
        } catch (error) {
            console.error('Error liking comment:', error);
        }
    };
    const fetchReplies = async (commentId)=>{
        try {
            const token = localStorage.getItem('token');
            const res = await fetch(`http://127.0.0.1:8000/comments/${commentId}/replied`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            if (res.ok) {
                const data = await res.json();
                setReplyReplies((prev)=>({
                        ...prev,
                        [commentId]: data
                    }));
            }
        } catch (err) {
            console.error("Error fetching replies:", err);
        }
    };
    function formatTime(createdAt) {
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
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CommentPage.useEffect": ()=>{
            const fetchPost = {
                "CommentPage.useEffect.fetchPost": async ()=>{
                    try {
                        const token = localStorage.getItem('token');
                        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(`http://127.0.0.1:8000/posts/${id}`, {
                            headers: {
                                'Authorization': `Bearer ${token}`
                            }
                        });
                        setPost(response.data);
                        // Kiểm tra liked_by và reposted_by nếu đã có currentUser
                        if (response.data.liked_by && currentUser) {
                            const userHasLiked = response.data.liked_by.map({
                                "CommentPage.useEffect.fetchPost.userHasLiked": (id)=>String(id).trim()
                            }["CommentPage.useEffect.fetchPost.userHasLiked"]).includes(String(currentUser.user_id).trim());
                            setLiked(userHasLiked);
                            setLikeCount(response.data.likes ?? 0);
                        } else {
                            setLiked(false);
                            setLikeCount(response.data.likes ?? 0);
                        }
                        if (response.data.reposted_by && currentUser) {
                            const userHasReposted = response.data.reposted_by.map({
                                "CommentPage.useEffect.fetchPost.userHasReposted": (id)=>String(id).trim()
                            }["CommentPage.useEffect.fetchPost.userHasReposted"]).includes(String(currentUser.user_id).trim());
                            setReposted(userHasReposted);
                            setRepostCount(response.data.reposts ?? 0);
                        } else {
                            setReposted(false);
                            setRepostCount(response.data.reposts ?? 0);
                        }
                    } catch (err) {
                        console.error("Error fetching post:", err);
                    }
                }
            }["CommentPage.useEffect.fetchPost"];
            fetchPost();
        }
    }["CommentPage.useEffect"], [
        id,
        currentUser
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CommentPage.useEffect": ()=>{
            if (!post?.user_id) return;
            const fetchUser = {
                "CommentPage.useEffect.fetchUser": async ()=>{
                    try {
                        const token = localStorage.getItem('token');
                        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(`http://127.0.0.1:8000/users/${post.user_id}`, {
                            headers: {
                                'Authorization': `Bearer ${token}`
                            }
                        });
                        setUser(response.data.user);
                    } catch (err) {
                        console.error("Error fetching user:", err);
                    }
                }
            }["CommentPage.useEffect.fetchUser"];
            fetchUser();
        }
    }["CommentPage.useEffect"], [
        post
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CommentPage.useEffect": ()=>{
            const fetchCurrentUser = {
                "CommentPage.useEffect.fetchCurrentUser": async ()=>{
                    try {
                        const token = localStorage.getItem('token');
                        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get("http://127.0.0.1:8000/users/me", {
                            headers: {
                                'Authorization': `Bearer ${token}`
                            }
                        });
                        setCurrentUser(response.data.user);
                    } catch (err) {
                        console.error("Error fetching current user:", err);
                    }
                }
            }["CommentPage.useEffect.fetchCurrentUser"];
            fetchCurrentUser();
        }
    }["CommentPage.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CommentPage.useEffect": ()=>{
            if (!post?._id && !post?.post_id && id) return;
            const fetchComments = {
                "CommentPage.useEffect.fetchComments": async ()=>{
                    try {
                        const token = localStorage.getItem('token');
                        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(`http://127.0.0.1:8000/posts/${post.post_id || post._id || id}/comments`, {
                            headers: {
                                'Authorization': `Bearer ${token}`
                            }
                        });
                        setCommentList(res.data);
                        // Cập nhật trạng thái like cho từng comment
                        if (currentUser) {
                            const likesObj = {};
                            const likeCountsObj = {};
                            res.data.forEach({
                                "CommentPage.useEffect.fetchComments": (cmt)=>{
                                    likesObj[cmt.comment_id] = cmt.liked_by?.includes(currentUser.user_id);
                                    likeCountsObj[cmt.comment_id] = cmt.likes ?? 0;
                                }
                            }["CommentPage.useEffect.fetchComments"]);
                            setCommentLikes(likesObj);
                            setCommentLikeCounts(likeCountsObj);
                        }
                    } catch (err) {
                        console.error("Error fetching comments:", err);
                    }
                }
            }["CommentPage.useEffect.fetchComments"];
            fetchComments();
        }
    }["CommentPage.useEffect"], [
        post,
        id,
        currentUser
    ]);
    // Thêm logic cập nhật/xóa comment
    const handleEditComment = (commentId, newContent)=>{
        setCommentList((prev)=>prev.map((cmt)=>cmt.comment_id === commentId ? {
                    ...cmt,
                    content: newContent
                } : cmt));
        // Nếu là reply thì cập nhật trong replyReplies
        setReplyReplies((prev)=>{
            const updated = {
                ...prev
            };
            Object.keys(updated).forEach((key)=>{
                updated[key] = updated[key]?.map((reply)=>reply.comment_id === commentId ? {
                        ...reply,
                        content: newContent
                    } : reply);
            });
            return updated;
        });
    };
    const handleDeleteComment = (commentId)=>{
        setCommentList((prev)=>prev.filter((cmt)=>cmt.comment_id !== commentId));
        setReplyReplies((prev)=>{
            const updated = {
                ...prev
            };
            Object.keys(updated).forEach((key)=>{
                updated[key] = updated[key]?.filter((reply)=>reply.comment_id !== commentId);
            });
            return updated;
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full h-screen bg-gray-100 flex flex-col items-center p-4 text-black",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "min-w-xl flex items-center justify-between gap-4 mb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeftIcon$3e$__["ArrowLeftIcon"], {
                        size: 24,
                        className: "cursor-pointer",
                        onClick: ()=>window.history.back()
                    }, void 0, false, {
                        fileName: "[project]/src/app/comment/[id]/page.tsx",
                        lineNumber: 403,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-xl font-bold mb-4",
                        children: "Bình luận"
                    }, void 0, false, {
                        fileName: "[project]/src/app/comment/[id]/page.tsx",
                        lineNumber: 404,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {}, void 0, false, {
                        fileName: "[project]/src/app/comment/[id]/page.tsx",
                        lineNumber: 405,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/comment/[id]/page.tsx",
                lineNumber: 402,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-xl w-full h-auto",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white rounded-2xl shadow-md p-4 space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "border-b pb-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center space-x-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: user?.avatar ? `http://127.0.0.1:8000/media/${user.avatar}` : "https://placehold.co/40x40",
                                            alt: "Avatar",
                                            className: "w-10 h-10 rounded-full"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/comment/[id]/page.tsx",
                                            lineNumber: 412,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: `/profile/${user?.user_id}`,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm font-semibold text-black hover:underline cursor-pointer",
                                                        children: user?.username || "username"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/comment/[id]/page.tsx",
                                                        lineNumber: 415,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/comment/[id]/page.tsx",
                                                    lineNumber: 414,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm text-gray-500",
                                                    children: post?.created_at ? formatTime(post.created_at) : "time"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/comment/[id]/page.tsx",
                                                    lineNumber: 419,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/comment/[id]/page.tsx",
                                            lineNumber: 413,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/comment/[id]/page.tsx",
                                    lineNumber: 411,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-2",
                                    children: post?.content || "content"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/comment/[id]/page.tsx",
                                    lineNumber: 422,
                                    columnNumber: 13
                                }, this),
                                post?.image && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: post.image,
                                    alt: "Post",
                                    className: "mt-2 rounded-lg"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/comment/[id]/page.tsx",
                                    lineNumber: 423,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-4 text-gray-500 mt-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ActionButton, {
                                            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
                                                size: 18,
                                                className: liked ? "text-red-500" : "text-gray-500"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/comment/[id]/page.tsx",
                                                lineNumber: 428,
                                                columnNumber: 23
                                            }, void 0),
                                            count: likeCount,
                                            onClick: handleLike
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/comment/[id]/page.tsx",
                                            lineNumber: 427,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ActionButton, {
                                            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__["MessageCircle"], {
                                                size: 18
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/comment/[id]/page.tsx",
                                                lineNumber: 433,
                                                columnNumber: 23
                                            }, void 0),
                                            count: post?.comments ?? 0,
                                            onClick: ()=>{}
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/comment/[id]/page.tsx",
                                            lineNumber: 432,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ActionButton, {
                                            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$repeat$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Repeat$3e$__["Repeat"], {
                                                size: 18,
                                                className: reposted ? "text-green-500" : "text-gray-500"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/comment/[id]/page.tsx",
                                                lineNumber: 438,
                                                columnNumber: 23
                                            }, void 0),
                                            count: repostCount,
                                            onClick: handleRepost
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/comment/[id]/page.tsx",
                                            lineNumber: 437,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/comment/[id]/page.tsx",
                                    lineNumber: 426,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/comment/[id]/page.tsx",
                            lineNumber: 410,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4 overflow-y-auto p-2 max-h-[440px]",
                            children: [
                                commentList.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-gray-400 text-sm",
                                    children: "Chưa có bình luận nào."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/comment/[id]/page.tsx",
                                    lineNumber: 448,
                                    columnNumber: 15
                                }, this),
                                commentList.map((cmt)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CommentItem, {
                                        cmt: cmt,
                                        currentUser: currentUser,
                                        commentLikes: commentLikes,
                                        commentLikeCounts: commentLikeCounts,
                                        handleLikeComment: handleLikeComment,
                                        showInputReply: showInputReply,
                                        toggleReplyInput: toggleReplyInput,
                                        replyInputs: replyInputs,
                                        setReplyInputs: setReplyInputs,
                                        handleReplySubmit: handleReplySubmit,
                                        replyReplies: replyReplies,
                                        fetchReplies: fetchReplies,
                                        formatTime: formatTime,
                                        onEditComment: handleEditComment,
                                        onDeleteComment: handleDeleteComment,
                                        showMedia: showMedia,
                                        setShowMedia: setShowMedia,
                                        replyImages: replyImages,
                                        setReplyImages: setReplyImages,
                                        replyVideos: replyVideos,
                                        setReplyVideos: setReplyVideos
                                    }, cmt.comment_id || cmt._id, false, {
                                        fileName: "[project]/src/app/comment/[id]/page.tsx",
                                        lineNumber: 451,
                                        columnNumber: 15
                                    }, this))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/comment/[id]/page.tsx",
                            lineNumber: 446,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center space-x-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: currentUser?.avatar ? `http://127.0.0.1:8000/media/${currentUser.avatar}` : "https://placehold.co/40x40",
                                    alt: "Avatar",
                                    className: "w-10 h-10 rounded-full"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/comment/[id]/page.tsx",
                                    lineNumber: 480,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    placeholder: "Viết bình luận...",
                                    className: "flex-1 p-2 border rounded-lg focus:outline-none",
                                    value: newComment,
                                    onChange: (e)=>setNewComment(e.target.value)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/comment/[id]/page.tsx",
                                    lineNumber: 481,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "cursor-pointer",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Image$3e$__["Image"], {
                                                    size: 20,
                                                    className: "hover:text-black"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/comment/[id]/page.tsx",
                                                    lineNumber: 485,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "file",
                                                    accept: "image/*",
                                                    style: {
                                                        display: 'none'
                                                    },
                                                    onChange: (e)=>{
                                                        const file = e.target.files?.[0] || null;
                                                        setCommentImage(file);
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/comment/[id]/page.tsx",
                                                    lineNumber: 486,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/comment/[id]/page.tsx",
                                            lineNumber: 484,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "cursor-pointer",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$video$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Video$3e$__["Video"], {
                                                    size: 20,
                                                    className: "hover:text-black"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/comment/[id]/page.tsx",
                                                    lineNumber: 489,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "file",
                                                    accept: "video/*",
                                                    style: {
                                                        display: 'none'
                                                    },
                                                    onChange: (e)=>{
                                                        const file = e.target.files?.[0] || null;
                                                        setCommentVideo(file);
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/comment/[id]/page.tsx",
                                                    lineNumber: 490,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/comment/[id]/page.tsx",
                                            lineNumber: 488,
                                            columnNumber: 15
                                        }, this),
                                        commentImage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative w-10 h-10",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    src: URL.createObjectURL(commentImage),
                                                    alt: "preview",
                                                    className: "w-10 h-10 object-cover rounded"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/comment/[id]/page.tsx",
                                                    lineNumber: 494,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    className: "absolute top-0 right-0 bg-white rounded-full p-0.5 text-xs text-red-500 border border-gray-300 hover:bg-gray-200",
                                                    onClick: ()=>setCommentImage(null),
                                                    children: "×"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/comment/[id]/page.tsx",
                                                    lineNumber: 495,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/comment/[id]/page.tsx",
                                            lineNumber: 493,
                                            columnNumber: 17
                                        }, this),
                                        commentVideo && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative w-16 h-10",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                                                    src: URL.createObjectURL(commentVideo),
                                                    className: "w-16 h-10 object-cover rounded",
                                                    controls: true
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/comment/[id]/page.tsx",
                                                    lineNumber: 500,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    className: "absolute top-0 right-0 bg-white rounded-full p-0.5 text-xs text-red-500 border border-gray-300 hover:bg-gray-200",
                                                    onClick: ()=>setCommentVideo(null),
                                                    children: "×"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/comment/[id]/page.tsx",
                                                    lineNumber: 501,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/comment/[id]/page.tsx",
                                            lineNumber: 499,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/comment/[id]/page.tsx",
                                    lineNumber: 483,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "bg-blue-500 text-white px-4 py-2 rounded-lg font-semibold",
                                    onClick: async ()=>{
                                        await handleComment();
                                        setNewComment('');
                                    },
                                    children: "Đăng"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/comment/[id]/page.tsx",
                                    lineNumber: 506,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/comment/[id]/page.tsx",
                            lineNumber: 479,
                            columnNumber: 11
                        }, this),
                        commentError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-red-500 text-xs mt-1",
                            children: commentError
                        }, void 0, false, {
                            fileName: "[project]/src/app/comment/[id]/page.tsx",
                            lineNumber: 508,
                            columnNumber: 28
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/comment/[id]/page.tsx",
                    lineNumber: 408,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/comment/[id]/page.tsx",
                lineNumber: 407,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/comment/[id]/page.tsx",
        lineNumber: 401,
        columnNumber: 5
    }, this);
}
_s(CommentPage, "mdCDDm+GbKJ+tJa2l8H9VaDkX1g=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"]
    ];
});
_c = CommentPage;
function ActionButton({ icon, count, onClick }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: onClick,
        className: "flex items-center space-x-1 text-gray-500 hover:text-black",
        children: [
            icon,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-sm",
                children: count
            }, void 0, false, {
                fileName: "[project]/src/app/comment/[id]/page.tsx",
                lineNumber: 520,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/comment/[id]/page.tsx",
        lineNumber: 518,
        columnNumber: 5
    }, this);
}
_c1 = ActionButton;
function CommentItem({ cmt, currentUser, commentLikes, commentLikeCounts, handleLikeComment, showInputReply, toggleReplyInput, replyInputs, setReplyInputs, handleReplySubmit, replyReplies, fetchReplies, formatTime, depth = 0, onEditComment, onDeleteComment, showMedia, setShowMedia, replyImages, setReplyImages, replyVideos, setReplyVideos }) {
    _s1();
    const [isEditing, setIsEditing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [editValue, setEditValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(cmt.content);
    const [commentUser, setCommentUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Fetch user info for comment
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CommentItem.useEffect": ()=>{
            const fetchCommentUser = {
                "CommentItem.useEffect.fetchCommentUser": async ()=>{
                    try {
                        const token = localStorage.getItem('token');
                        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(`http://127.0.0.1:8000/users/${cmt.user_id}`, {
                            headers: {
                                'Authorization': `Bearer ${token}`
                            }
                        });
                        setCommentUser(response.data.user);
                    } catch (err) {
                        console.error("Error fetching comment user:", err);
                    }
                }
            }["CommentItem.useEffect.fetchCommentUser"];
            fetchCommentUser();
        }
    }["CommentItem.useEffect"], [
        cmt.user_id
    ]);
    // Hàm cập nhật comment
    const handleEditSave = async ()=>{
        try {
            const token = localStorage.getItem('token');
            const formData = new FormData();
            formData.append('content', editValue);
            const response = await fetch(`http://127.0.0.1:8000/comments/${cmt.comment_id}`, {
                method: 'PUT',
                headers: {
                    'Authorization': `Bearer ${token}`
                },
                body: formData
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
    const handleDelete = async ()=>{
        if (!window.confirm('Bạn có chắc muốn xóa bình luận này?')) return;
        try {
            const token = localStorage.getItem('token');
            const response = await fetch(`http://127.0.0.1:8000/comments/${cmt.comment_id}`, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            if (!response.ok) throw new Error('Failed to delete comment');
            if (onDeleteComment) onDeleteComment(cmt.comment_id);
        } catch (error) {
            console.error('Error deleting comment:', error);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            marginLeft: depth * 10,
            maxWidth: "100%"
        },
        className: "flex flex-col items-start mt-2 border-b pb-2 w-full",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-2 w-full",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: commentUser?.avatar ? `http://127.0.0.1:8000/media/${commentUser.avatar}` : "https://placehold.co/40x40",
                        alt: "Avatar",
                        className: "w-8 h-8 rounded-full"
                    }, void 0, false, {
                        fileName: "[project]/src/app/comment/[id]/page.tsx",
                        lineNumber: 615,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-semibold text-sm",
                        children: commentUser?.username || "user"
                    }, void 0, false, {
                        fileName: "[project]/src/app/comment/[id]/page.tsx",
                        lineNumber: 616,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-xs text-gray-400",
                        children: cmt.created_at ? formatTime(cmt.created_at) : "--"
                    }, void 0, false, {
                        fileName: "[project]/src/app/comment/[id]/page.tsx",
                        lineNumber: 617,
                        columnNumber: 9
                    }, this),
                    currentUser?.user_id === cmt.user_id && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "ml-auto flex gap-2",
                        children: !isEditing && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "text-blue-500 text-xs",
                                    onClick: ()=>setIsEditing(true),
                                    children: "Sửa"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/comment/[id]/page.tsx",
                                    lineNumber: 625,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "text-red-500 text-xs",
                                    onClick: handleDelete,
                                    children: "Xóa"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/comment/[id]/page.tsx",
                                    lineNumber: 626,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true)
                    }, void 0, false, {
                        fileName: "[project]/src/app/comment/[id]/page.tsx",
                        lineNumber: 622,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/comment/[id]/page.tsx",
                lineNumber: 614,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 w-full",
                children: [
                    isEditing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-2 w-full mt-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                className: "flex-1 p-2 border rounded-lg text-sm",
                                value: editValue,
                                onChange: (e)=>setEditValue(e.target.value)
                            }, void 0, false, {
                                fileName: "[project]/src/app/comment/[id]/page.tsx",
                                lineNumber: 635,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "bg-blue-500 text-white px-2 py-1 rounded text-xs",
                                onClick: handleEditSave,
                                children: "Lưu"
                            }, void 0, false, {
                                fileName: "[project]/src/app/comment/[id]/page.tsx",
                                lineNumber: 641,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "bg-gray-300 text-black px-2 py-1 rounded text-xs",
                                onClick: ()=>{
                                    setIsEditing(false);
                                    setEditValue(cmt.content);
                                },
                                children: "Hủy"
                            }, void 0, false, {
                                fileName: "[project]/src/app/comment/[id]/page.tsx",
                                lineNumber: 642,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/comment/[id]/page.tsx",
                        lineNumber: 634,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-sm mt-1 break-words",
                        children: cmt.content
                    }, void 0, false, {
                        fileName: "[project]/src/app/comment/[id]/page.tsx",
                        lineNumber: 645,
                        columnNumber: 11
                    }, this),
                    cmt.image_id && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: `http://127.0.0.1:8000/media/${cmt.image_id}`,
                        alt: "Comment",
                        className: "mt-2 rounded-lg"
                    }, void 0, false, {
                        fileName: "[project]/src/app/comment/[id]/page.tsx",
                        lineNumber: 649,
                        columnNumber: 11
                    }, this),
                    cmt.video_id && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                        src: `http://127.0.0.1:8000/media/${cmt.video_id}?is_image=false`,
                        controls: true,
                        className: "mt-2 rounded-lg w-full"
                    }, void 0, false, {
                        fileName: "[project]/src/app/comment/[id]/page.tsx",
                        lineNumber: 656,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/comment/[id]/page.tsx",
                lineNumber: 632,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-4 text-gray-500 mt-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ActionButton, {
                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
                            size: 18,
                            className: commentLikes[cmt.comment_id] ? "text-red-500" : "text-gray-500"
                        }, void 0, false, {
                            fileName: "[project]/src/app/comment/[id]/page.tsx",
                            lineNumber: 665,
                            columnNumber: 17
                        }, void 0),
                        count: commentLikeCounts[cmt.comment_id] ?? 0,
                        onClick: ()=>handleLikeComment(cmt.comment_id)
                    }, void 0, false, {
                        fileName: "[project]/src/app/comment/[id]/page.tsx",
                        lineNumber: 664,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ActionButton, {
                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__["MessageCircle"], {
                            size: 18
                        }, void 0, false, {
                            fileName: "[project]/src/app/comment/[id]/page.tsx",
                            lineNumber: 670,
                            columnNumber: 17
                        }, void 0),
                        count: cmt.replies ?? 0,
                        onClick: async ()=>{
                            toggleReplyInput(cmt.comment_id);
                            if (!replyReplies[cmt.comment_id]) await fetchReplies(cmt.comment_id);
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/app/comment/[id]/page.tsx",
                        lineNumber: 669,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/comment/[id]/page.tsx",
                lineNumber: 663,
                columnNumber: 7
            }, this),
            showInputReply[cmt.comment_id] && replyReplies[cmt.comment_id]?.map((reply)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CommentItem, {
                    cmt: {
                        ...reply,
                        created_at: reply.created_at || reply.createdAt || reply.timestamp
                    },
                    currentUser: currentUser,
                    commentLikes: commentLikes,
                    commentLikeCounts: commentLikeCounts,
                    handleLikeComment: handleLikeComment,
                    showInputReply: showInputReply,
                    toggleReplyInput: toggleReplyInput,
                    replyInputs: replyInputs,
                    setReplyInputs: setReplyInputs,
                    handleReplySubmit: handleReplySubmit,
                    replyReplies: replyReplies,
                    fetchReplies: fetchReplies,
                    formatTime: formatTime,
                    depth: depth + 1,
                    onEditComment: onEditComment,
                    onDeleteComment: onDeleteComment,
                    showMedia: showMedia,
                    setShowMedia: setShowMedia,
                    replyImages: replyImages,
                    setReplyImages: setReplyImages,
                    replyVideos: replyVideos,
                    setReplyVideos: setReplyVideos
                }, reply.comment_id || reply._id || reply.id, false, {
                    fileName: "[project]/src/app/comment/[id]/page.tsx",
                    lineNumber: 680,
                    columnNumber: 9
                }, this)),
            showInputReply[cmt.comment_id] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-start space-x-2 mt-2 w-[90%]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: currentUser?.avatar ? `http://127.0.0.1:8000/media/${currentUser.avatar}` : "https://placehold.co/32x32",
                        alt: "Avatar",
                        className: "w-8 h-8 rounded-full"
                    }, void 0, false, {
                        fileName: "[project]/src/app/comment/[id]/page.tsx",
                        lineNumber: 712,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "text",
                        className: "flex-1 p-2 border rounded-lg text-sm",
                        placeholder: "Trả lời bình luận...",
                        value: replyInputs[cmt.comment_id] || "",
                        onChange: (e)=>setReplyInputs((prev)=>({
                                    ...prev,
                                    [cmt.comment_id]: e.target.value
                                }))
                    }, void 0, false, {
                        fileName: "[project]/src/app/comment/[id]/page.tsx",
                        lineNumber: 713,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "cursor-pointer",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Image$3e$__["Image"], {
                                size: 20,
                                className: "hover:text-black"
                            }, void 0, false, {
                                fileName: "[project]/src/app/comment/[id]/page.tsx",
                                lineNumber: 722,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "file",
                                accept: "image/*",
                                style: {
                                    display: 'none'
                                },
                                onChange: (e)=>{
                                    const file = e.target.files?.[0] || null;
                                    setReplyImages((prev)=>({
                                            ...prev,
                                            [cmt.comment_id]: file
                                        }));
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/app/comment/[id]/page.tsx",
                                lineNumber: 723,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/comment/[id]/page.tsx",
                        lineNumber: 721,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "cursor-pointer",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$video$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Video$3e$__["Video"], {
                                size: 20,
                                className: "hover:text-black"
                            }, void 0, false, {
                                fileName: "[project]/src/app/comment/[id]/page.tsx",
                                lineNumber: 737,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "file",
                                accept: "video/*",
                                style: {
                                    display: 'none'
                                },
                                onChange: (e)=>{
                                    const file = e.target.files?.[0] || null;
                                    setReplyVideos((prev)=>({
                                            ...prev,
                                            [cmt.comment_id]: file
                                        }));
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/app/comment/[id]/page.tsx",
                                lineNumber: 738,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/comment/[id]/page.tsx",
                        lineNumber: 736,
                        columnNumber: 11
                    }, this),
                    replyImages[cmt.comment_id] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative w-10 h-10 ml-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: URL.createObjectURL(replyImages[cmt.comment_id]),
                                alt: "preview",
                                className: "w-10 h-10 object-cover rounded"
                            }, void 0, false, {
                                fileName: "[project]/src/app/comment/[id]/page.tsx",
                                lineNumber: 754,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: "absolute top-0 right-0 bg-white rounded-full p-0.5 text-xs text-red-500 border border-gray-300 hover:bg-gray-200",
                                onClick: ()=>setReplyImages((prev)=>({
                                            ...prev,
                                            [cmt.comment_id]: null
                                        })),
                                children: "×"
                            }, void 0, false, {
                                fileName: "[project]/src/app/comment/[id]/page.tsx",
                                lineNumber: 759,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/comment/[id]/page.tsx",
                        lineNumber: 753,
                        columnNumber: 13
                    }, this),
                    replyVideos[cmt.comment_id] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative w-16 h-10 ml-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                                src: URL.createObjectURL(replyVideos[cmt.comment_id]),
                                className: "w-16 h-10 object-cover rounded",
                                controls: true
                            }, void 0, false, {
                                fileName: "[project]/src/app/comment/[id]/page.tsx",
                                lineNumber: 774,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: "absolute top-0 right-0 bg-white rounded-full p-0.5 text-xs text-red-500 border border-gray-300 hover:bg-gray-200",
                                onClick: ()=>setReplyVideos((prev)=>({
                                            ...prev,
                                            [cmt.comment_id]: null
                                        })),
                                children: "×"
                            }, void 0, false, {
                                fileName: "[project]/src/app/comment/[id]/page.tsx",
                                lineNumber: 779,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/comment/[id]/page.tsx",
                        lineNumber: 773,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "bg-blue-500 text-white px-3 py-1 rounded-lg text-sm",
                        onClick: ()=>handleReplySubmit(cmt.post_id, cmt.comment_id),
                        children: "Gửi"
                    }, void 0, false, {
                        fileName: "[project]/src/app/comment/[id]/page.tsx",
                        lineNumber: 791,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/comment/[id]/page.tsx",
                lineNumber: 711,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/comment/[id]/page.tsx",
        lineNumber: 610,
        columnNumber: 5
    }, this);
}
_s1(CommentItem, "wa60JzPwVey2zY6NSeSq5IDDyDY=");
_c2 = CommentItem;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "CommentPage");
__turbopack_context__.k.register(_c1, "ActionButton");
__turbopack_context__.k.register(_c2, "CommentItem");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_app_comment_%5Bid%5D_page_tsx_b1af7596._.js.map