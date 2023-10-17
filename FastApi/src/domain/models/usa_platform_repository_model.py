from sqlalchemy import Column, Integer, String
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()

class PlatformRepositoryModel(Base):
    __tablename__ = 'ipacoa_platform'

    index = Column(Integer, primary_key=True, index=True)
    id = Column(String, index=True)
    name = Column(String, index=True)
    lat = Column(String, index=True)
    lon = Column(String, index=True)
    type = Column(String, index=True)

