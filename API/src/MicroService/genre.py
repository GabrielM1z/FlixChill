# API KEY : d2385f7323f46a904df66f949d71cc39

import json
import tmdbsimple as tmdb
tmdb.API_KEY = 'd2385f7323f46a904df66f949d71cc39'

def getGenreName():
    dictGenre = getGenreWithId()
    listGenre = list()
    for it in dictGenre:
        listGenre.append(it)
    return listGenre

def getGenreWithId():
    genre = tmdb.Genres()
    dictGenre = genre.movie_list(language="fr")['genres']
    newDict = dict()
    for it in dictGenre:
        newDict[it["name"]] = it["id"]
    return newDict