import { combineReducers } from 'redux'
import searchMovies from './search'

const rootReducer = combineReducers({
    movies: searchMovies
})

export default rootReducer

