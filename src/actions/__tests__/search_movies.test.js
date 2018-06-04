import { SEARCH_MOVIES } from '..'
import { searchMovies } from '../search_movies'

describe('searchMovies', () => {
    it('creates action with passed query', () => {
        const query = {
            term: 'abc',
            searchScope: 'TITLE',
            sortKey: 'RATING',
            sortOrder: 'ASC'
        }
        const action = searchMovies(query)
        expect(action).toEqual({
            type: SEARCH_MOVIES,
            payload: query
        })
    })
})

