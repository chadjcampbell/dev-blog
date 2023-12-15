from pydantic import BaseModel


class CommentBase(BaseModel):
    blog: str
    name: str
    comment: str
    

class CommentCreate(CommentBase):
    pass


class Comment(CommentBase):
    id: int

    class Config:
        orm_mode = True
