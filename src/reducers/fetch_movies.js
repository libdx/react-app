//@flow
import { FETCH_MOVIES } from '../actions'
import { title, date, raiting } from '../types/movie'

import type { Movie } from '../types/movie'
import type { Action } from '../actions'

const compare = (comparator) => (a: Movie, b: Movie) => {
    return comparator(b) - comparator(a)
}

const fetchMovies = (state: Array<Movie> = [], action: Action): Array<Movie> => {
    switch (action.type) {
        case FETCH_MOVIES:
            return action.payload.data.data
        default:
            return state
    }
}

export default fetchMovies

