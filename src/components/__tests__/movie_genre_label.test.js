import React from 'react'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'
import MovieGenreLabel from '../movie_genre_label'
import { genre } from '../../types/movie'

// FIXME: fire out how to properly mock model objects
import { forrest as movie } from '../../data/mocks'


describe('MovieGenreLabel', () => {

    let element
    let component

    beforeEach(() => {
        element = <MovieGenreLabel movie={movie} />
        component = shallow(element)
    })

    it('shows correct genre', () => {
        const text = component.text()
        expect(text).toEqual(expect.stringContaining(genre(movie)))
    })

    it('renders correctly', () => {
        const tree = renderer.create(element).toJSON()
        expect(tree).toMatchSnapshot()
    })
})
