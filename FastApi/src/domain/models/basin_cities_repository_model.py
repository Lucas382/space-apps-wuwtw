from sqlalchemy import Boolean, Column, ForeignKey, Integer, String
from FastApi.src.infrastructure.data.db_context.sqlite_sql_context import Base


class BasinCityRepositoryModel(Base):
    __tablename__ = 'controle_semestral'

    index = Column(Integer, primary_key=True, index=True)
    codigo_ibge = Column(Integer, index=True)
    municipio = Column(String, index=True)
    parametro = Column(String, index=True)

