//@flow

import React from 'react'
import MovieCard from './movie_card'

import type { Movie } from '../types/movie'

type Props = {
    movies: Array<Movie>,
    onClick?: (id: number) => void
}

const MovieGrid = ({ movies, onClick }: Props) => {

    const items = movies.map(movie => {
        return (
            <div key={movie.id} className="col-md-4 col-sm-6">
                <MovieCard movie={movie} onClick={ () => onClick && onClick(movie.id) }/>
            </div>
        )
    })

    return (
        <div className="row">
            {items}
        </div>
    )
}

export default MovieGrid
