# API KEY : d2385f7323f46a904df66f949d71cc39

import json
import random
import tmdbsimple as tmdb
tmdb.API_KEY = 'd2385f7323f46a904df66f949d71cc39'

def searchMoviesByThematic(idGenre):
    genre = tmdb.Genres(idGenre)
    allFilm = list()
    for i in range(1,10):
        try:
            dictionnaire = genre.movies(language="fr", page=i)
            for it in dictionnaire['results']:
                allFilm.append(it)
        except:
            continue
    allFilmSelected = selectGoodFilm(allFilm)
    return json.dumps(filmToPrint(allFilmSelected))

def filmToPrint(allFilmSelected):
    allFilmRandom = list()
    for i in range(0,9):
        filmChosen = random.choice(allFilmSelected)
        allFilmSelected.remove(filmChosen)
        allFilmRandom.append(filmChosen)
    return allFilmRandom

def selectGoodFilm(allFilm):
    for it in allFilm:
        if(it["vote_count"]<100):
            allFilm.remove(it)
    return allFilm