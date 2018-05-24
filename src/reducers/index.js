import { combineReducers } from 'redux'
import fetchMovies from './fetch_movies'
import searchMovies from './search_movies'
import sortKey from './sort_order'

const rootReducer = combineReducers({
    movies: fetchMovies,
    query: searchMovies,
    sortKey: sortKey
})

export default rootReducer

