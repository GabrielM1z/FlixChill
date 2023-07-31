from fastapi import FastAPI
from MicroService.weather_service import get_movies_by_weather
from MicroService.search import searchMoviesByThematic
from MicroService.genre import getGenreName
from MicroService.genre import getGenreWithId
import urllib.request
import json
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from MicroService.dark_mode import get_theme


app = FastAPI()

# Step 2: Add the CORS middleware to allow requests from all origins
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

### public call

# default route
@app.get("/")
def read_root():
    return {"Hello": "World"}

# route for recommendation by weather
@app.get("/recommendation/weather/")
def read_recommendation_weather():
    return get_movies_by_weather()

# route for recommendation by list
@app.get("/recommendation/list/{thematic_str}")
def read_recommendation_thematic(thematic_str: str):
    return {"thematic": thematic_str}


# route for the theme (night or day / black or white)
@app.get('/background/{city}')
def read_background_city(city: str):
    result = get_theme(city)
    return {"backgroundTheme": result}

# route for get all genre with his id.
@app.get("/genre")
def read_genre():
    return getGenreName()

# route for search list film by thematic
@app.get("/private/search/theme/{thematic_id}")
def read_search_thematic(thematic_id: int):
    print(searchMoviesByThematic(thematic_id))
    return searchMoviesByThematic(thematic_id)

# route for get all genre with his id.
@app.get("/private/genre")
def read_genre():
    return getGenreWithId()

