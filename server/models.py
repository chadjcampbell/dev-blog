from sqlalchemy import Column, Integer, String, func, DateTime

from database import Base


class Comment(Base):
    __tablename__ = "comments"

    id = Column(Integer, primary_key=True, index=True)
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    blog = Column(String, index=True)
    name = Column(String)
    comment = Column(String)
