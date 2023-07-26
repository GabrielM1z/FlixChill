from typing import Union

from fastapi import FastAPI

app = FastAPI()


# default route
@app.get("/")
def read_root():
    return {"Hello": "World"}


# route for recommendation by thematic
@app.get("/recommendation/thematic/{thematic_str}")
def read_recommendation_thematic(thematic_str: str):
    return {"thematic": thematic_str}


# route for recommendation by weather
@app.get("/recommendation/weather/")
def read_recommendation_weather():
    return {"Hello": "World"}


# route for recommendation by list
@app.get("/recommendation/weather/{thematic_str}")
def read_recommendation_thematic(thematic_str: str):
    return {"thematic": thematic_str}