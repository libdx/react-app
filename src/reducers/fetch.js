import { FETCH_MOVIES } from '../actions'

const fetchMovies = (state = [], action) => {
    switch (action.type) {
        case FETCH_MOVIES:
            console.log(action.payload.data.data)
            return action.payload.data.data
        default:
            return state
    }
}

export default fetchMovies

