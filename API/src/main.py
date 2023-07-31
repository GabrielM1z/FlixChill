from typing import Union

from fastapi import FastAPI
from MicroService.weather_service import get_thematic_by_weather
from MicroService.search import searchMoviesByThematic
import urllib.request
import json

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
def read_recommendation_weather():

    result_bytes = urllib.request.urlopen(
        f"http://127.0.0.1:8000/search/theme/{int(get_thematic_by_weather()['id'])}"
    )
    json_data = json.load(result_bytes)

    return result_bytes


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


# route for search list film by thematic
@app.get("/search/theme/{thematic_id}")
def read_search_thematic(thematic_id: int):
    print(searchMoviesByThematic(id))
    return searchMoviesByThematic(id)
