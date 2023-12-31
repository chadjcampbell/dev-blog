from sqlalchemy.orm import Session

import models
import schemas


def get_comments(db: Session, blog_name: str, skip: int = 0, limit: int = 100):
    return db.query(models.Comment).where(models.Comment.blog == blog_name).order_by(models.Comment.created_at.desc()).offset(skip).limit(limit).all()


def create_comment(db: Session, data: schemas.CommentCreate):
    db_comment = models.Comment(
        blog=data.blog, name=data.name, comment=data.comment)
    db.add(db_comment)
    db.commit()
    db.refresh(db_comment)
    return db_comment
