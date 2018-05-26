import { combineReducers } from 'redux'
import fetchMovies from './fetch_movies'
import searchMovies from './search_movies'
import sortMovies from './sorting'

const rootReducer = combineReducers({
    movies: fetchMovies,
    query: searchMovies,
    sortKey: sortMovies
})

export default rootReducer

