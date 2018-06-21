//@flow

import { SELECT_MOVIE, LOAD_MOVIE } from '../actions'

import type { Movie } from '../types/movie'
import type { Action } from '../types/action'

const fetchMovie = (state: ?Movie = null, action: Action): ?Movie => {
    switch (action.type) {
        case SELECT_MOVIE:
            return action.payload || state
        case LOAD_MOVIE:
            return action.payload.data
        default:
            return state
    }
}

export default fetchMovie
