//@flow
import { FETCH_MOVIES, SORT_MOVIES } from '../actions'
import { title, date, raiting } from '../types/movie'

import type { Movie } from '../types/movie'
import type { Action } from '../actions'

const byRaiting = (a: Movie, b: Movie): number => {
    return raiting(b) - raiting(a)
}

const compare = (comparator) => (a: Movie, b: Movie) => {
    return comparator(b) - comparator(a)
}

type MovieProp = (a: Movie) => any

const sameOrder = (a: Movie) => 0

const comparisonProp = (sortKey: string): MovieProp => {
    switch (sortKey) {
        case 'RELEASE_DATE':
            return date
        case 'RATING':
            return raiting
        default:
            return sameOrder
    }
}

const fetchMovies = (state: Array<Movie> = [], action: Action): Array<Movie> => {
    switch (action.type) {
        case FETCH_MOVIES:
            return action.payload.data.data
        case SORT_MOVIES:
            const prop = comparisonProp(action.payload)
            return state.slice().sort(compare(prop))
        default:
            return state
    }
}

export default fetchMovies

