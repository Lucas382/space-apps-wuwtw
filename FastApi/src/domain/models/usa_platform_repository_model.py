from sqlalchemy import Boolean, Column, ForeignKey, Integer, String
from FastApi.src.infrastructure.data.db_context.sqlite_sql_context import Base


class PlatformRepositoryModel(Base):
    __tablename__ = 'platform_data'

    index = Column(Integer, primary_key=True, index=True)
    id = Column(String, index=True)
    name = Column(String, index=True)
    lat = Column(String, index=True)
    lon = Column(String, index=True)
    type = Column(String, index=True)
