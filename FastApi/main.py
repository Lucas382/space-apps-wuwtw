from fastapi import FastAPI, HTTPException,Depends
from fastapi.middleware.cors import CORSMiddleware
from typing import Annotated
from sqlalchemy.orm import Session
from fastapi.responses import RedirectResponse
from starlette.responses import JSONResponse

import pandas as pd

import FastApi.src.domain.models.usa_platform_repository_model as models
from FastApi.src.infrastructure.data.db_context.sqlite_sql_context import engine, SessionLocal


app = FastAPI()

origins = [
    'http://localhost:8081',
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
)

models.Base.metadata.create_all(bind=engine)


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
    result = db.query(models.PlatformRepositoryModel).all()
    if not result:
        raise HTTPException(status_code=404, detail='Platform not found! ')
    return result

# @app.get('/controle_semestral/')
# async def get_city_by_name(name_of_city: str, db: db_dependency):
#     result = db.query(models.BasinCityRepositoryModel).filter(models.BasinCityRepositoryModel.municipio == name_of_city).first()
#     if not result:
#         raise HTTPException(status_code=404, detail='City not found! ')
#     return result


@app.get("/animais_marinhos/")
async def get_sea_animals():
    sea_animals_path = 'FastApi/src/infrastructure/data/repositories/animais_marinhos.xlsx'

    df_sea_animals = pd.read_excel(sea_animals_path)
    df_sea_animals = df_sea_animals.fillna('')

    df_sea_animals = remove_left_spaces(df_sea_animals)

    sea_animals_data = df_sea_animals.to_dict(orient='records')

    return JSONResponse(content=sea_animals_data)


@app.get("/municipios/")
async def get_basin_data_from_city_name(name_of_city: str):
    file_path_city = 'FastApi/src/infrastructure/data/repositories/bacias_nivel_4_municipios.xlsx'
    file_path_river_basin = 'FastApi/src/infrastructure/data/repositories/bacias_nivel_4.xlsx'

    df_city = pd.read_excel(file_path_city)
    df_city = df_city.fillna('')

    otto_code = df_city['Codificação Otto Pfafstetter ']
    city_name = df_city['Municípios']

    list_cod_otto = []
    for i, cities_string in enumerate(city_name):
        for city in cities_string.split(','):
            if name_of_city in city:
                list_cod_otto.append(int(otto_code[i]))

    df_river_basin = pd.read_excel(file_path_river_basin)
    df_river_basin = df_river_basin.fillna('')

    fk_otto_code = df_river_basin['código Otto']
    watersheds_name = df_river_basin['nome da bacia hidrográfica']
    main_course = df_river_basin['nome do curso principal']
    main_tributary_rivers = df_river_basin['principais afluentes']
    sub_watersheds = df_river_basin['sub-bacias hidrográficas']
    suprabasins = df_river_basin['suprabacia(s)']

    result_objects = []

    for i, cod in enumerate(fk_otto_code):
        if cod and int(cod) in list_cod_otto:
            print(int(cod), list_cod_otto)
            result_objects.append({
                'código Otto': int(cod),
                'nome da bacia hidrográfica': watersheds_name[i],
                'nome do curso principal': main_course[i],
                'principais afluentes': main_tributary_rivers[i],
                'sub-bacias hidrográficas': sub_watersheds[i],
                'suprabacia(s)': suprabasins[i]
            })

    return result_objects


