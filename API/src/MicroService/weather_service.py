import json
import urllib.request
from datetime import datetime
from time import strftime
from pprint import pprint


# init dictionnary between condition and categorie of movie
corresp_weather_cat = {
    "Blowing Or Drifting Snow":{'id': 28, 'name': 'Action'},
    "Heavy Freezing Drizzle/Freezing Rain":{'id': 12, 'name': 'Adventure'},
    "Light Freezing Drizzle/Freezing Rain":{'id': 16, 'name': 'Animation'},
    "Freezing Fog":{'id': 35, 'name': 'Comedy'},
    "Heavy Freezing Rain":{'id': 80, 'name': 'Crime'},
    "Light Freezing Rain":{'id': 99, 'name': 'Documentary'},
    "Funnel Cloud/Tornado":{'id': 18, 'name': 'Drama'},
    "Hail Showers":{'id': 10751, 'name': 'Family'},
    "Ice":{'id': 14, 'name': 'Fantasy'},
    "Lightning Without Thunder":{'id': 36, 'name': 'History'},
    "Mist":{'id': 27, 'name': 'Horror'},
    "Drizzle":{'id': 10402, 'name': 'Music'},
    "Precipitation In Vicinity":{'id': 9648, 'name': 'Mystery'},
    "Rain":{'id': 10749, 'name': 'Romance'},
    "Heavy Rain And Snow":{'id': 878, 'name': 'Science Fiction'},
    "Light Rain And Snow":{'id': 10770, 'name': 'TV Movie'},
    "Rain Showers":{'id': 53, 'name': 'Thriller'},
    "Heavy Rain":{'id': 10752, 'name': 'War'},
    "Light Rain":{'id': 37, 'name': 'Western'},
    "Sky Coverage Decreasing":{'id': 28, 'name': 'Action'},
    "Sky Coverage Increasing":{'id': 12, 'name': 'Adventure'},
    "Sky Unchanged":{'id': 16, 'name': 'Animation'},
    "Heavy Drizzle":{'id': 35, 'name': 'Comedy'},
    "Smoke Or Haze":{'id': 80, 'name': 'Crime'},
    "Snow":{'id': 99, 'name': 'Documentary'},
    "Snow And Rain Showers":{'id': 18, 'name': 'Drama'},
    "Snow Showers":{'id': 10751, 'name': 'Family'},
    "Heavy Snow":{'id': 14, 'name': 'Fantasy'},
    "Light Snow":{'id': 36, 'name': 'History'},
    "Squalls":{'id': 27, 'name': 'Horror'},
    "Thunderstorm":{'id': 10402, 'name': 'Music'},
    "Thunderstorm Without Precipitation":{'id': 9648, 'name': 'Mystery'},
    "Diamond Dust":{'id': 10749, 'name': 'Romance'},
    "Light Drizzle":{'id': 878, 'name': 'Science Fiction'},
    "Hail":{'id': 10770, 'name': 'TV Movie'},
    "Overcast":{'id': 53, 'name': 'Thriller'},
    "Partially cloudy":{'id': 10752, 'name': 'War'},
    "Clear":{'id': 37, 'name': 'Western'},
    "Heavy Drizzle/Rain":{'id': 28, 'name': 'Action'},
    "Light Drizzle/Rain":{'id': 12, 'name': 'Adventure'},
    "Dust storm":{'id': 16, 'name': 'Animation'},
    "Fog":{'id': 35, 'name': 'Comedy'},
    "Freezing Drizzle/Freezing Rain":{'id': 80, 'name': 'Crime'},
}


# get the weather of today (all the info)
def get_weather():

    result_bytes = urllib.request.urlopen(
        "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Prague/today?unitGroup=us&include=hours&key=3PFZV37BAS4CWECAB233P3URB&contentType=json"
    )
    json_data = json.load(result_bytes)

    return json_data


# give the weather of the current hour (all the info)
def get_weather_by_hour():

    # we juste take the hour of the current date
    hour = datetime.now().hour
    hour_str = str(hour)+":00:00"

    # we take the weather of the hour
    json_weather = get_weather()

    liste_heure = json_weather["days"][0]["hours"]

    json_good = "erreur"
    for heure in liste_heure:
        if heure["datetime"] == hour_str:
            json_good = heure
            continue

    return json_good


# give the weather condition of the current hour (just)
def get_conditions():
    
    weather = get_weather_by_hour()
    if weather == "erreur":
        return "erreur"

    condition = weather["conditions"]
    
    return condition


def get_thematic_by_weather():

    condition = get_conditions()
    cat = corresp_weather_cat[condition]


    return cat

    

if __name__ == "__main__":
    pprint(get_thematic_by_weather())
