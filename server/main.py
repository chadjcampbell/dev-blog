from fastapi import FastAPI, HTTPException
from pydantic import BaseModel

app = FastAPI()


# Read all comments for a given blog
@app.get("/comments/{blog_name}", response_model=Comment)
async def read_comments(blog_name: str):
    if len(comments[blog_name]) == 0:
        raise HTTPException(status_code=404, detail="Comments not found")
    return comments[blog_name]


# Create an comment
@app.post("/comments/{blog_name}", response_model=Comment)
async def create_item(blog_name: str, comment: Comment):
    new_comment = comments[blog_name].append(comment)
    return new_comment
