import { SEARCH_MOVIES } from '../actions'

export const defaultQuery = {
    term: '',
    searchScope: 'TITLE',
    sortKey: 'RELEASE_DATE',
    sortOrder: 'DESC'
}

const searchMovies = (state = defaultQuery, action) => {
    switch (action.type) {
        case SEARCH_MOVIES:
            return action.payload
        default:
            return state
    }
}

export default searchMovies

