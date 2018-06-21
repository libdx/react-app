import { combineReducers } from 'redux'
import fetchMovies from './fetch_movies'
import searchMovies from './search_movies'
import fetchMovie from './fetch_movie'

const rootReducer = combineReducers({
    movies: fetchMovies,
    query: searchMovies,
    currentMovie: fetchMovie
})

export default rootReducer

