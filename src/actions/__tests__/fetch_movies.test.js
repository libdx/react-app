import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'

import { FETCH_MOVIES, LOAD_MOVIES } from '..'
import { fetchMovies, BASE_URL } from '../fetch_movies'

const mockStore = configureMockStore([thunk])
const axioMock = new MockAdapter(axios)

describe('FETCH_MOVIES action', () => {
    let store

    beforeEach(() => store = mockStore())

    afterEach(() => axioMock.restore())

    it('creates action to fetch movies', () => {
        const query = {
            term: 'abc',
            searchScope: 'TITLE',
            sortKey: 'RATING',
            sortOrder: 'ASC'
        }

        const movies = [
            {id: 1},
            {id: 2},
            {id: 3}
        ]

        axioMock.onGet(`${BASE_URL}/movies`).reply(200, { data: movies } ) 
        
        const action = fetchMovies(query)

        store.dispatch(action)

        const lastAction = store.getActions()[0]

        return lastAction.payload.then(res => {
            expect(lastAction.type).toEqual(LOAD_MOVIES)
            expect(res.data.data).toEqual(movies)
        })
    })
})

