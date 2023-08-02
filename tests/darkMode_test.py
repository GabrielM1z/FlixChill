import urllib.request
import json


# test if the API return good format
def test_API_darkMode_return_dict():
    
    result_bytes = urllib.request.urlopen(
        f"http://127.0.0.1:8000/background/Prague"
    )
    json_data = json.load(result_bytes)

    assert type(json_data) == type({1: 1})


# test if the API return the right number of value
def test_API_darkMode_return_1_value():
    
    result_bytes = urllib.request.urlopen(
        f"http://127.0.0.1:8000/background/Prague"
    )
    json_data = json.load(result_bytes)

    assert len(json_data) == 1