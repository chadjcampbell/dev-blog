from sqlalchemy import Column, Integer, String

from .database import Base


class Comments(Base):
    __tablename__ = "comments"

    id = Column(Integer, primary_key=True, index=True)
    blog = Column(String, index=True)
    name = Column(String)
    comment = Column(String)