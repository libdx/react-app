import { combineReducers } from 'redux'
import fetchMovies from './fetch'
import filter from './filter'
import sortKey from './sort_order'

const rootReducer = combineReducers({
    movies: fetchMovies,
    query: filter,
    sortKey: sortKey
})

export default rootReducer

