import { combineReducers } from 'redux'
import fetchMovies from './fetch_movies'
import searchMovies from './search_movies'
import fetchMovie from './fetch_movie'
import fetchRelevantMovies from './fetch_relevant_movies'

const rootReducer = combineReducers({
    movies: fetchMovies,
    query: searchMovies,
    currentMovie: fetchMovie,
    relevantMovies: fetchRelevantMovies
})

export default rootReducer

