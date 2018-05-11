import React from 'react'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'
import MovieGrid  from '../movie_grid'
import MovieCard from '../movie_card'

// FIXME: fire out how to properly mock model objects
import { movies } from '../../data/mocks'

describe('MovieGrid', () => {

    let element
    let component

    beforeEach(() => {
        element = <MovieGrid movies={movies} />
        component = shallow(element)
    })

    it('has list of movies', () => {
        const list = component.find('MovieCard') 
        expect(list.length).toBe(movies.length)
    })

    it('renders correctly', () => {
        const tree = renderer.create(element).toJSON()
        expect(tree).toMatchSnapshot()
    })
})
