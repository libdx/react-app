import { combineReducers } from 'redux'
import fetchMovies from './fetch'
import filter from './filter'
import sortOrder from './sort_order'

const rootReducer = combineReducers({
    movies: fetchMovies,
    filter, // TODO: rename to query
    sortOrder: sortOrder // TODO: rename to sortKey and add sortOrder = ASC | DESC
})

export default rootReducer

