import json
import urllib.request
from datetime import datetime
from time import strftime

def get_weather():

    result_bytes = urllib.request.urlopen(
        "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Prague/today?unitGroup=us&include=hours&key=3PFZV37BAS4CWECAB233P3URB&contentType=json"
    )
    json_data = json.load(result_bytes)

    return json_data


def get_weather_by_hour():

    # we juste take the hour of the current date
    strftime("%H:00:00", datetime.now())

    # we take the weather of the hour
    json_weather = get_weather()
