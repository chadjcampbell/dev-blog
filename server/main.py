from fastapi import Depends, FastAPI
from sqlalchemy.orm import Session

import crud
import models
import schemas
from database import SessionLocal, engine

models.Base.metadata.create_all(bind=engine)

app = FastAPI()


# Dependency
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


@app.post("/comments/", response_model=schemas.Comment)
def add_comment(data: schemas.CommentCreate, db: Session = Depends(get_db)):
    return crud.create_comment(db, data=data)


@app.get("/comments/{blog_name}", response_model=list[schemas.Comment])
def read_comments(blog_name, skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    return crud.get_comments(db, blog_name, skip=skip, limit=limit)
