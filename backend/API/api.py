from fastapi import FastAPI, HTTPException, Depends, Query, Form, File, UploadFile
from typing import List, Optional, Any
from pydantic import BaseModel
from DAO.DAO_manager import DAO_Manager
from auth.jwt_handler import create_access_token
import json
from fastapi.responses import JSONResponse, StreamingResponse
from bson import ObjectId
from datetime import datetime
from auth.dependencies import get_current_user
from fastapi.middleware.cors import CORSMiddleware

# ------------------------
# Mock Models and Schemas
# ------------------------
Manager = DAO_Manager()
class User(BaseModel):
    full_name: str
    phone_number: str
    username: str
    email: str
    password: str

class PostCreate(BaseModel):
    user_id: str
    content: str

class Comment(BaseModel):
    post_id: str
    user_id: str
    content: str
    parent_comment_id: Optional[str] = None

class UserUpdate(BaseModel):
    full_name: str
    phone_number: str
    username: str
    email: str
    bio: str
# ------------------------
# Auth Endpoints
# ------------------------
app = FastAPI()

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # Frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/signup")
def signup(user: User):
    print(user)
    if (Manager.check_user_exists(phone_number=user.phone_number, email=user.email, username=user.username)):
        raise HTTPException(status_code=400, detail="User already exists")
    Manager.create_user(user)
    return {"message": "User signed up", "user": user} 

@app.post("/login")
def login(user: User):
    user = Manager.authenticate_user(user.phone_number, user.email, user.username, user.password)
    if not user:
        raise HTTPException(status_code=400, detail="User not found",)
    return {"message": "User logged in", "token": create_access_token({"user_id": user["user_id"]})}

class CustomJSONEncoder(json.JSONEncoder):
    def default(self, obj):
        if isinstance(obj, ObjectId):
            return str(obj)
        if isinstance(obj, datetime):
            return obj.isoformat()
        if isinstance(obj, bytes):
            # Nếu muốn convert sang chuỗi base64
            return obj.decode("utf-8", errors="ignore") 
        return super().default(obj)
    

def custom_json_serializer(obj: Any) -> Any:
    if isinstance(obj, ObjectId):
        return str(obj)
    if isinstance(obj, datetime):
        return obj.isoformat()
    if hasattr(obj, 'to_dict'):
        return obj.to_dict()
    return str(obj)

@app.post("/posts")
async def create_post(
    user_id: str = Depends(get_current_user),
    content: str = Form(...),
    image: UploadFile = File(None),
    video: UploadFile = File(None)
):
    result = Manager.create_post(user_id, content, image, video)
        
    # Use custom serializer for the response
    return JSONResponse(
        content=json.loads(
            json.dumps(result, cls=CustomJSONEncoder)
        )
    )

@app.get("/users/me")
def getCurrentUser(user_id: str = Depends(get_current_user)):
    user = Manager.get_user(user_id)
    return {"user": user}

@app.get("/media/{file_id}")
def get_media(file_id: str, is_image: bool = True):
    file_data, content_type = Manager.get_media(file_id, is_image)
    if not file_data:
        raise HTTPException(status_code=404, detail="File not found")
    return StreamingResponse(file_data, media_type=content_type)

@app.get("/posts")
def get_posts():
    posts = Manager.get_posts()
    if not posts:
        raise HTTPException(status_code=404, detail="Post not found")
    return posts

@app.put("/posts/{post_id}")
def edit_post(post_id: str, content: str = Form(...), user_id: str = Depends(get_current_user)):
    post = Manager.edit_post(post_id, content, user_id)
    if not post:
        raise HTTPException(status_code=404, detail="Post not found")
    return JSONResponse(
        content=json.loads(
            json.dumps(post, cls=CustomJSONEncoder)
        )
    )

@app.delete("/posts/{post_id}")
def delete_post(post_id: str, user_id: str = Depends(get_current_user)):
    return Manager.delete_post(post_id, user_id)

@app.post("/posts/{post_id}/like")
def like_post(post_id: str, user_id: str = Depends(get_current_user)):
    post = Manager.like_post(post_id, user_id)
    if not post:
        raise HTTPException(status_code=404, detail="Post not found")
    return JSONResponse(
        content=json.loads(
            json.dumps(post, cls=CustomJSONEncoder)
        )
    )

@app.post("/posts/{post_id}/repost")
def repost(post_id: str, user_id: str = Depends(get_current_user)):
    post = Manager.repost(post_id, user_id)
    if not post:
        raise HTTPException(status_code=404, detail="Post not found")
    return JSONResponse(
        content=json.loads(
            json.dumps(post, cls=CustomJSONEncoder)
        )
    )

@app.get("/search/posts")
def search_posts(query: str):
    posts = Manager.search_posts(query)
    return {"query": query, "results": posts}

# ------------------------
# Comment Endpoints
# ------------------------

@app.get("/posts/{post_id}")
def get_post_by_id(post_id: str):
    post = Manager.get_post_by_id(post_id)
    return post

@app.post("/posts/{post_id}/comment")
async def comment_post(
    post_id: str,
    user_id: str = Depends(get_current_user),
    content: str = Form(...),
    image: UploadFile = File(None),
    video: UploadFile = File(None)
):
    result = Manager.comment_post(post_id, user_id, content, image, video)
    return JSONResponse(
        content=json.loads(
            json.dumps(result, cls=CustomJSONEncoder)
        )
    )

@app.post("/comments/{comment_id}/reply")
async def reply_comment(
    comment_id: str,
    user_id: str = Depends(get_current_user),
    content: str = Form(...),
    image: UploadFile = File(None),
    video: UploadFile = File(None)
):
    try:
        # Validate file types if provided
        if image and not image.content_type.startswith('image/'):
            raise HTTPException(status_code=400, detail="Invalid image file type")
        if video and not video.content_type.startswith('video/'):
            raise HTTPException(status_code=400, detail="Invalid video file type")
        
        # Create reply with files
        result = Manager.reply_comment(comment_id, user_id, content, image, video)
        if not result:
            raise HTTPException(status_code=404, detail="Comment not found")
            
        return JSONResponse(
            content=json.loads(
                json.dumps(result, cls=CustomJSONEncoder)
            )
        )
    except HTTPException as e:
        raise e
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to create reply: {str(e)}")

@app.put("/comments/{comment_id}")
def edit_comment(comment_id: str, content: str = Form(...), user_id: str = Depends(get_current_user)):
    try:
        result = Manager.edit_comment(comment_id, content, user_id)
        if not result:
            raise HTTPException(status_code=404, detail="Comment not found")
        return JSONResponse(
            content=json.loads(
                json.dumps(result, cls=CustomJSONEncoder)
            )
        )
    except HTTPException as e:
        raise e
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to edit comment: {str(e)}")

@app.delete("/comments/{comment_id}")
def delete_comment(comment_id: str, user_id: str = Depends(get_current_user)):
    try:
        result = Manager.delete_comment(comment_id, user_id)
        if not result:
            raise HTTPException(status_code=404, detail="Comment not found")
        return JSONResponse(
            content=json.loads(
                json.dumps(result, cls=CustomJSONEncoder)
            )
        )
    except HTTPException as e:
        raise e
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to delete comment: {str(e)}")

@app.post("/comments/{comment_id}/like")
def like_comment(comment_id: str, user_id: str = Depends(get_current_user)):
    try:
        result = Manager.like_comment(comment_id, user_id)
        if not result:
            raise HTTPException(status_code=404, detail="Comment not found")
        return JSONResponse(
            content=json.loads(
                json.dumps(result, cls=CustomJSONEncoder)
            )
        )
    except HTTPException as e:
        raise e
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to like comment: {str(e)}")

@app.get("/comments/user/{user_id}")
def get_comments_by_user_id(user_id: str):
    try:
        comments = Manager.get_comments_by_user_id(user_id)
        return JSONResponse(
            content=json.loads(
                json.dumps(comments, cls=CustomJSONEncoder)
            )
        )
    except HTTPException as e:
        raise e
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to get comments by user_id: {str(e)}")

@app.get("/posts/{post_id}/comments")
def get_comments(post_id: str):
    try:
        comments = Manager.get_comments(post_id)
        return JSONResponse(
            content=json.loads(
                json.dumps(comments, cls=CustomJSONEncoder)
            )
        )
    except HTTPException as e:
        raise e
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to get comments: {str(e)}")

@app.get("/comments/{comment_id}/replied")
def get_comments_replied(comment_id: str):
    try:
        reply_comment = Manager.get_replies(comment_id)
        return JSONResponse(
            content=json.loads(
                json.dumps(reply_comment, cls=CustomJSONEncoder)
            )
        )
    except HTTPException as e:
        raise e
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to get comments replies: {str(e)}")

@app.get("/users")
def get_users():
    try:
        users = Manager.get_users()
        return {"users": users}
    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/users/{user_id}")
def get_user(user_id: str):
    user = Manager.get_user(user_id)
    return {"user": user}

@app.get("/search/users")
def search_user(query: str = None):
    result = Manager.search_user(query)
    return {"users": result}

@app.post("/users/{user_id}/follow")
def follow_user(user_id: str, current_user_id: str = Depends(get_current_user)):
    Manager.follow_user(current_user_id, user_id)
    user = Manager.get_user(user_id)
    return {"user": user}

@app.post("/users/{user_id}/unfollow")
def unfollow_user(user_id: str, current_user_id: str = Depends(get_current_user)):
    Manager.unfollow_user(current_user_id, user_id)
    user = Manager.get_user(user_id)
    return {"user": user}
@app.get("/users/{user_id}/posts")
def get_user_posts(user_id: str):
    posts = Manager.get_user_posts(user_id)
    return {"posts": posts}

@app.put("/users/{user_id}/update")
async def update_user(
    user_id: str,
    current_user_id: str = Depends(get_current_user),
    full_name: str = Form(None),
    phone_number: str = Form(None), 
    username: str = Form(None),
    email: str = Form(None),
    bio: str = Form(None),
    avatar: UploadFile = File(None)
):
    # Kiểm tra quyền cập nhật
    if current_user_id != user_id:
        raise HTTPException(status_code=403, detail="Không có quyền cập nhật thông tin người dùng khác")

    # Get current user data
    current_user = Manager.get_user(user_id)
    if not current_user:
        raise HTTPException(status_code=404, detail="Không tìm thấy người dùng")
    
    # Kiểm tra username và email có bị trùng không
    if username and username != current_user["username"]:
        existing_user = Manager.get_user_by_username(username)
        if existing_user:
            raise HTTPException(status_code=400, detail="Username đã tồn tại")
            
    if email and email != current_user["email"]:
        existing_user = Manager.get_user_by_email(email) 
        if existing_user:
            raise HTTPException(status_code=400, detail="Email đã tồn tại")

    # Tạo dict chứa dữ liệu cập nhật
    user_data = {
        "full_name": full_name if full_name is not None else current_user["full_name"],
        "phone_number": phone_number if phone_number is not None else current_user["phone_number"],
        "username": username if username is not None else current_user["username"],
        "email": email if email is not None else current_user["email"],
        "bio": bio if bio is not None else current_user.get("bio", ""),
        "avatar": current_user.get("avatar", None)  # Sử dụng get() để xử lý trường hợp không có avatar
    }

    try:
        if avatar:
            # Xử lý lưu file avatar vào GridFS
            contents = await avatar.read()
            avatar_id = Manager.save_file_to_gridfs(contents, avatar.filename, avatar.content_type)
            user_data["avatar"] = str(avatar_id)

        # Cập nhật thông tin user
        Manager.update_user(user_id, user_data)
        updated_user = Manager.get_user(user_id)
        
        return {"user": updated_user}
        
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Lỗi khi cập nhật thông tin: {str(e)}")