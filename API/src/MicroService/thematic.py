import json
import urllib.request

def getMoviesByThematic(thematic):
    genreDict = getGenreDict()
    #print(genreDict)
    #id = genreDict[f"{thematic}"]

def getGenreDict():
    result_bytes = urllib.request.urlopen(
        f"http://127.0.0.1:8000/private/genre/"
    )
    return result_bytes