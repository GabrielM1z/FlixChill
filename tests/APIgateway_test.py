import json
import urllib.request

# test if API work with the default call
def test_API_work():

    result_bytes = urllib.request.urlopen(
        f"http://127.0.0.1:8000"
    )
    json_data = json.load(result_bytes)
    assert {"Hello":"World"} == json_data