import urllib.request
import json

# test if the API return good format
def test_API_weather_return_list():
    
    result_bytes = urllib.request.urlopen(
        f"http://127.0.0.1:8000/recommendation/weather/"
    )
    json_data = json.load(result_bytes)

    assert type(json_data) == type(['Action', 'Aventure'])