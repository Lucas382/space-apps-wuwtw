from sqlalchemy import Boolean, Column, ForeignKey, Integer, String
from FastApi.src.infrastructure.data.db_context.postgre_sql_context import Base

class Questions(Base):
    __tablename__ = 'questions'

    cod_otto = Column(Integer, primary_key=True, index=True)
    nomes_municipio = Column(String, index=True)
