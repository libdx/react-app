import configureMockStore from 'redux-mock-store'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'

import { FETCH_MOVIES } from '..'
import { fetchMovies, BASE_URL } from '../fetch_movies'

const mockStore = configureMockStore()
const axioMock = new MockAdapter(axios)

describe('fetchMovies', () => {
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

        action.payload.then(res => {
            expect(action.type).toEqual(FETCH_MOVIES)
            expect(res.data.data).toEqual(movies)
        })
    })
})

