//@flow

import React from 'react'
import MovieCard from './movie_card'

import type { Movie } from '../movie'

type Props = {
    movies: Array<Movie>
}

const MovieGrid = ({ movies }: Props) => {

    const items = movies.map((movie, index) => {
        return (
            <div key={index} className="col-md-4 col-sm-6">
                <MovieCard movie={movie} />
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
