from fastapi import FastAPI, HTTPException,Depends
from fastapi.middleware.cors import CORSMiddleware
from typing import Annotated
from sqlalchemy.orm import Session
from fastapi.responses import RedirectResponse
from starlette.responses import JSONResponse

import pandas as pd

import FastApi.src.domain.models.usa_platform_repository_model as platformModels
import FastApi.src.domain.models.br_basin_repository_model as basinModels
from FastApi.src.infrastructure.data.db_context.sqlite_sql_context import engine, SessionLocal


app = FastAPI()

origins = [
    'http://localhost:8081',
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
)

platformModels.Base.metadata.create_all(bind=engine)
basinModels.Base.metadata.create_all(bind=engine)


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


db_dependency = Annotated[Session, Depends(get_db)]


def remove_left_spaces(df):
    df = df.apply(lambda x: x.str.strip() if x.dtype == "object" else x)
    return df


@app.get('/')
async def root():
    return RedirectResponse("/docs")


@app.get('/dados_plataforma/')
async def get_platform_data_by_id(db: db_dependency):
    result = db.query(platformModels.PlatformRepositoryModel).all()
    if not result:
        raise HTTPException(status_code=404, detail='Platform not found! ')
    return result


@app.get("/animais_marinhos/")
async def get_sea_animals():
    sea_animals_path = 'FastApi/src/infrastructure/data/repositories/animais_marinhos.xlsx'

    df_sea_animals = pd.read_excel(sea_animals_path)
    df_sea_animals = df_sea_animals.fillna('')

    df_sea_animals = remove_left_spaces(df_sea_animals)

    sea_animals_data = df_sea_animals.to_dict(orient='records')

    return JSONResponse(content=sea_animals_data)


@app.get("/municipios/")
async def get_basin_data_from_city_name(name_of_city: str, db: db_dependency):
    result = []

    for level in range(2, 7):
        city_model = getattr(basinModels, f"Basin{level}CityRepositoryModel")
        city_datas = db.query(city_model).filter(city_model.municipios.like(f"%{name_of_city},%")).all()

        for city_data in city_datas:
            codificacao_otto_pfafstetter_ = city_data.codificacao_otto_pfafstetter_

            basin_model = getattr(basinModels, f"Basin{level}RepositoryModel")
            basin_data = db.query(basin_model).filter(basin_model.codigo_otto == codificacao_otto_pfafstetter_).all()

            if basin_data:
                result.extend(basin_data)

    if not result:
        raise HTTPException(status_code=404, detail='Nenhum dado correspondente encontrado!')

    return result


