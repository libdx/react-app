import React from 'react'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'
import MovieCard  from '../movie_card'
import MovieTitle from '../movie_title'
import MovieGenreLabel from '../movie_genre_label'
import MoviePoster from '../movie_poster'

// FIXME: fire out how to properly mock model objects
import { forrest as movie } from '../../data/mocks'

describe('MovieCard', () => {

    let element
    let component

    beforeEach(() => {
        element = <MovieCard movie={movie} /> 
        component = shallow(element)
    })

    it('has movie title', () => {
        const title = component.find('MovieTitle') 
        expect(title.exists()).toBe(true)
    })

    it('has movie genre label', () => {
        const label = component.find('MovieGenreLabel') 
        expect(label.exists()).toBe(true)
    })

    it('has movie poster', () => {
        const poster = component.find('MoviePoster') 
        expect(poster.exists()).toBe(true)
    })

    it('renders correctly', () => {
        const tree = renderer.create(element).toJSON()
        expect(tree).toMatchSnapshot()
    })
})
