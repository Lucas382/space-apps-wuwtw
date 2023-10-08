from fastapi import FastAPI, HTTPException, Depends
from sqlalchemy.orm import Session
from typing import Annotated
import uvicorn

from FastApi.src.infrastructure.data.db_context.postgre_sql_context import engine, SessionLocal
from FastApi.src.application.api_models.question_choices_api_models import QuestionBase
from FastApi.src.domain.models import question_choices_repository_models as models

import pandas as pd

app = FastAPI()
models.Base.metadata.create_all(bind=engine)


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


db_dependency = Annotated[Session, Depends(get_db)]


@app.get("/municipios/{nome_municipio}")
async def get_otto_code_from_name(name_of_city: str):
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
            print(int(cod) , list_cod_otto)
            result_objects.append({
                'código Otto': int(cod) ,
                'nome da bacia hidrográfica': watersheds_name[i],
                'nome do curso principal': main_course[i],
                'principais afluentes': main_tributary_rivers[i],
                'sub-bacias hidrográficas': sub_watersheds[i],
                'suprabacia(s)': suprabasins[i]
            })

    return result_objects


@app.get("/questions/{question_id}")
async def read_question(question_id: int, db: db_dependency):
    result = db.query(models.Questions).filter(models.Questions.id == question_id).first()
    if not result:
        raise HTTPException(status_code=404, detail='Question not found')
    return result


@app.get('/choices/{question_id}')
async def read_choices(question_id: int, db:db_dependency):
    result = db.query(models.Choices).filter(models.Choices.question_id == question_id).all()
    if not result:
        raise HTTPException(status_code=404, detail='Choices not found')
    return result


@app.post("/questions/")
async def create_questions(question: QuestionBase, db: db_dependency):
    db_question = models.Questions(question_text=question.question_text)
    db.add(db_question)
    db.commit()
    db.refresh(db_question)

    for choice in question.choices:
        db_choice = models.Choices(choice_text=choice.choice_text, is_correct=choice.is_correct, question_id=db_question.id)
        db.add(db_choice)
    db.commit()


if __name__ == "__main__":
    uvicorn.run(app, host="127.0.0.1", port=8000)
