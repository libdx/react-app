//@flow

import { LOAD_RELEVANT_MOVIES } from '../actions'

import type { Movie } from '../types/movie'
import type { Action } from '../types/action'

const fetchRelevantMovies = (state: Array<Movie> = [], action: Action): Array<Movie> => {
    switch (action.type) {
        case LOAD_RELEVANT_MOVIES:
            console.log('moo', 'load')
            return action.payload.data.data || state
        default:
            console.log('moo', 'default')
            return state
    }
}

export default fetchRelevantMovies
