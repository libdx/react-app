import { combineReducers } from 'redux'
import fetchMovies from './fetch'
import filter from './filter'

const rootReducer = combineReducers({
    movies: fetchMovies,
    filter
})

export default rootReducer

