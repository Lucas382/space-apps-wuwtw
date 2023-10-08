from pydantic import BaseModel
from typing import List

class ChoiceBase(BaseModel):
    cod_otto: int
    nomes_municipio: str