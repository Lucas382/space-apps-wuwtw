from pydantic import BaseModel


class BasinCityModel(BaseModel):
    index: int
    codigo_ibge: int
    nomes_municipio: str
