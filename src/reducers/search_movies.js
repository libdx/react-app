import { SEARCH_MOVIES } from '../actions'

const filter = (
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

export default filter

