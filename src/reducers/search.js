import { SEARCH_MOVIE } from '../actions'
import { movies } from '../data/mocks'

const searchMovies = (state = [], action) => {
    switch (action.type) {
        case SEARCH_MOVIE:
            return movies
        default:
            return state
    }
}

export default searchMovies

