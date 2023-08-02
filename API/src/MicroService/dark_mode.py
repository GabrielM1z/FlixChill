# API KEY : 1cad6b2d88d910d039245e615e4789fb

import requests
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware


app = FastAPI()

# Step 2: Add the CORS middleware to allow requests from all origins
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

def getWeatherData(city):
    api_key = '1cad6b2d88d910d039245e615e4789fb'
    base_url = f'http://api.openweathermap.org/data/2.5/weather?q={city}&appid={api_key}'
    response = requests.get(base_url)
    data = response.json()
    return data

def getThemeByWeather(weather_data):
    sunrise = weather_data['sys']['sunrise']
    sunset = weather_data['sys']['sunset']
    current_time = weather_data['dt']
    if current_time > sunrise and current_time < sunset:
        return 'light_mode '
    else:
        return 'dark_mode'

def getTheme(city):
    try:
        weather_data = getWeatherData(city)
        theme = getThemeByWeather(weather_data)
        return theme, 200
    except Exception as e:
        response = {'error': 'Erreur lors de la récupération des données météorologiques.'}
        return response, 501