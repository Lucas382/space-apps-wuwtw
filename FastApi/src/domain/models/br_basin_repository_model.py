from sqlalchemy import Column, Integer, String
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()


class BasinRepositoryModel(Base):
    __abstract__ = True

    index = Column(Integer, primary_key=True, index=True)
    codigo_otto = Column(Integer, index=True)
    nivel_otto = Column(Integer, index=True)
    nome_da_bacia_hidrografica = Column(String, index=True)
    nome_do_curso_principal = Column(String, index=True)
    principais_afluentes = Column(String, index=True)
    sub_bacias_hidrograficas = Column(String, index=True)
    suprabacias = Column(String, index=True)


class BasinCityRepositoryModel(Base):
    __abstract__ = True

    index = Column(Integer, primary_key=True, index=True)
    codificacao_otto_pfafstetter_ = Column(Integer, index=True)
    municipios = Column(String, index=True)


class Basin2RepositoryModel(BasinRepositoryModel):
    __tablename__ = 'bacias_nivel_2'


class Basin2CityRepositoryModel(BasinCityRepositoryModel):
    __tablename__ = 'bacias_nivel_2_municipios'


class Basin3RepositoryModel(BasinRepositoryModel):
    __tablename__ = 'bacias_nivel_3'


class Basin3CityRepositoryModel(BasinCityRepositoryModel):
    __tablename__ = 'bacias_nivel_3_municipios'


class Basin4RepositoryModel(BasinRepositoryModel):
    __tablename__ = 'bacias_nivel_4'


class Basin4CityRepositoryModel(BasinCityRepositoryModel):
    __tablename__ = 'bacias_nivel_4_municipios'


class Basin5RepositoryModel(BasinRepositoryModel):
    __tablename__ = 'bacias_nivel_5'


class Basin5CityRepositoryModel(BasinCityRepositoryModel):
    __tablename__ = 'bacias_nivel_5_municipios'


class Basin6RepositoryModel(BasinRepositoryModel):
    __tablename__ = 'bacias_nivel_6'


class Basin6CityRepositoryModel(BasinCityRepositoryModel):
    __tablename__ = 'bacias_nivel_6_municipios'
