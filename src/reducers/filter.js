import { SEARCH_MOVIE } from '../actions'
import { movies } from '../data/mocks'

import type { Action as SearchMoviesAction } from '../actions'

import type { Criteria } from '../types/criteria'

type State = {
    term: string,
    searchBy: Criteria,
}

const filter = (
        state: State = {term: '', searchBy: 'TITLE'},
        action: SearchMoviesAction
    ): State => {
    switch (action.type) {
        case SEARCH_MOVIE:
            return action.payload
        default:
            return state
    }
}

export default filter

