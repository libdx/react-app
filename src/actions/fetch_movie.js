//@flow

import { FETCH_MOVIE } from '.'
import { loadMovie } from './load_movie'
import { selectMovie } from './select_movie'

import type { Action } from '../types/action'
import type { Movie } from '../types/movie'

const findMovie = (id: number, movies: Array<Movie>): Movie => {
    return movies.filter(movie => movie.id === id)[0]
}

export const fetchMovie = (id: number): Action => {
    const thunk = (dispatch, getState) => {
        const { movies } = getState()
        const movie = findMovie(id, movies)

        let action: Action
        if (movie) {
            action = selectMovie(movie)
        } else {
            action = loadMovie(id)
        }

        dispatch(action)
    }
    thunk.meta = {
        debounce: {
            time: 300,
            key: FETCH_MOVIE
        }
    }

    return thunk
}

