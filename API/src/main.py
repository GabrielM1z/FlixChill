from typing import Union

from fastapi import FastAPI

from MicroService.weather_service import get_weather

app = FastAPI()


### public call

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
async def read_recommendation_weather():
    return get_weather()


# route for recommendation by list
@app.get("/recommendation/list/{thematic_str}")
def read_recommendation_thematic(thematic_str: str):
    return {"thematic": thematic_str}


# route for the theme (night or day / black or white)
@app.get("/theme")
def read_theme():
    theme = "dark"
    return {"theme": theme}



### private call

