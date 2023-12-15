from pydantic import BaseModel
from datetime import datetime


class CommentBase(BaseModel):
    blog: str
    name: str
    comment: str
    

class CommentCreate(CommentBase):
    pass


class Comment(CommentBase):
    id: int
    created_at: datetime

    class Config:
        orm_mode = True
