//@flow

import type { Criteria } from '../types/criteria'

export const SEARCH_MOVIE = 'SEARCH_MOVIE'

type Payload = {
    term: string,
    searchBy: Criteria
}

export type Action = {
    type: string,
    payload: Payload,
}

export const searchMovies = (filter: Payload): Action => ({
    type: SEARCH_MOVIE,
    payload: filter
})

