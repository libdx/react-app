import { LOAD_MOVIES } from '../../actions'
import { fetchMovies } from '../../actions/fetch_movies'
import reducer from '../fetch_movies'

describe('fetchMovies reducer', () => {
    it('returns default state', () => {
        expect(reducer(undefined, {})).toEqual([])
    })

    it('handles FETCH_MOVIES action', () => {
        const values = [1, 2, 3]
        const data = { data: values }
        const action = {
            type: LOAD_MOVIES,
            payload: { data }
        }
        expect(reducer(null, action)).toEqual(values)
    })

    it('updates (replaces) old state', () => {
        const values = [41, 42, 43]
        const data = { data: values }
        const action = {
            type: LOAD_MOVIES,
            payload: { data }
        }

        const oldState = [1, 2, 3]
        expect(reducer(oldState, action)).toEqual(values)
    })
})
