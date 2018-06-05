import React from 'react'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'
import configureMockStore from 'redux-mock-store'
import shallowWithStore from '../../test_helpers/shallow_with_store'
import MovieResultsGrid from '../movie_results_grid'
import MovieGrid  from '../../components/movie_grid'
import MovieCard from '../../components/movie_card'

import { movies } from '../../data/mocks'

const mockStore = configureMockStore()

describe('MovieResultsGrid', () => {

    let store
    let element
    let component

    beforeEach(() => {
        store = mockStore({ movies })
        element = <MovieResultsGrid />
        component = shallowWithStore(element, store).dive()
    })

    it('has list of movies', () => {
        const list = component.find('MovieCard') 
        expect(list.length).toBe(movies.length)
    })
})
