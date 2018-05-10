import React from 'react'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'
import MovieTitle from '../movie_title'

// FIXME: fire out how to properly mock model objects
import { forrest as movie } from '../../data/mocks'

describe('MovieTitle', () => {

    let element
    let component

    beforeEach(() => {
        element = <MovieTitle movie={movie} />
        component = shallow(element)
    })

    it('shows title', () => {
        const text = component.text()
        expect(text).toEqual(expect.stringContaining(movie.title))
    })

    it('shows release year', () => {
        const text = component.text()
        expect(text).toEqual(expect.stringContaining(movie.releaseYear))
    })

    it('renders correctly', () => {
        const tree = renderer.create(element).toJSON()
        expect(tree).toMatchSnapshot()
    })
})

