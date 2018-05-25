import { SEARCH_MOVIES } from '../actions'

const searchMovies = (
        state = {term: '', searchScope: 'TITLE'},
        action
    ) => {
    switch (action.type) {
        case SEARCH_MOVIES:
            return action.payload
        default:
            return state
    }
}

export default searchMovies

