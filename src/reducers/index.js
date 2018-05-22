import { combineReducers } from 'redux'
import searchMovies from './search'
import filter from './filter'

const rootReducer = combineReducers({
    movies: searchMovies,
    filter
})

export default rootReducer

