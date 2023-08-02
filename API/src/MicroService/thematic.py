import json
import urllib.request
import urllib.parse

def getMoviesByThematic(thematic):
    genreDict = getGenreDict()
    id = urllib.parse.quote(str(genreDict[thematic]))
    result_bytes = urllib.request.urlopen(
        f"http://127.0.0.1:8000/private/search/theme/{id}"
    )
    return json.load(result_bytes)

def getGenreDict():
    result_bytes = urllib.request.urlopen(
        f"http://127.0.0.1:8000/private/genre/"
    )
    return json.load(result_bytes)