import { SEARCH_MOVIES } from '../actions'

const searchMovies = (
        state = {term: '', searchBy: 'TITLE'},
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

