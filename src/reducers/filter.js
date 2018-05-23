import { FILTER_MOVIES } from '../actions'

const filter = (
        state = {term: '', searchBy: 'TITLE'},
        action
    ) => {
    switch (action.type) {
        case FILTER_MOVIES:
            return action.payload
        default:
            return state
    }
}

export default filter

