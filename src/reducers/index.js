import { combineReducers } from 'redux'
import fetchMovies from './fetch_movies'
import searchMovies from './search_movies'

const rootReducer = combineReducers({
    movies: fetchMovies,
    query: searchMovies
})

export default rootReducer

