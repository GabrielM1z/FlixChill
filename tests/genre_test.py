import urllib.request
import json

# test if the API return good format
def test_API_genre_return_list():
    
    result_bytes = urllib.request.urlopen(
        f"http://127.0.0.1:8000/genre"
    )
    json_data = json.load(result_bytes)

    assert type(json_data) == type(['Action', 'Aventure'])


# test if the API return good resultat
def test_API_genre_return_good_resultat():
    
    result_bytes = urllib.request.urlopen(
        f"http://127.0.0.1:8000/genre"
    )
    json_data = json.load(result_bytes)

    assert json_data == ["Action","Aventure","Animation","Comédie","Crime","Documentaire","Drame","Familial","Fantastique","Histoire","Horreur","Musique","Mystère","Romance","Science-Fiction","Téléfilm","Thriller","Guerre","Western"]
