import React from 'react'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'
import MovieDescription  from '../movie_description'

// FIXME: fire out how to properly mock model objects
import { forrest as movie } from '../../data/mocks'

describe('', () => {

    let element
    let component

    beforeEach(() => {
        element = <MovieDescription movie={movie} />
        component = shallow(element)
    })

    it('shows description', () => {
        const text = component.text()
        expect(text).toEqual(expect.stringContaining(movie.description))
    })

    it('renders correctly', () => {
        const tree = renderer.create(element).toJSON()
        expect(tree).toMatchSnapshot()
    })
})
