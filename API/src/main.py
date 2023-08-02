from fastapi import FastAPI
import urllib.parse
from fastapi.middleware.cors import CORSMiddleware
from MicroService.weather_service import getMoviesByWeather
from MicroService.search import searchMoviesByThematic
from MicroService.genre import getGenreName
from MicroService.genre import getGenreWithId
from MicroService.thematic import getMoviesByThematic
from MicroService.dark_mode import getTheme


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
    return getMoviesByWeather()


# route for the theme (night or day / black or white)
@app.get('/background/{city}')
def read_background_city(city: str):
    city = urllib.parse.unquote(city)
    result = getTheme(city)
    return {"backgroundTheme": result}

# route for get all genre with his id.
@app.get("/genre")
def read_genre():
    return getGenreName()

### Private API

# route for search list film by thematic
@app.get("/private/search/theme/{thematic_id}")
def read_search_thematic(thematic_id: int):
    return searchMoviesByThematic(thematic_id)

# route for get all genre with his id.
@app.get("/private/genre")
def read_genre():
    return getGenreWithId()

