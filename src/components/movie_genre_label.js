//@flow

import React from 'react'
import type { Movie } from '../movie'

type Props = {
    movie: Movie
}

const MovieGenreLabel = ({ movie }: Props) => {
    return (
        <p className="card-subtitle mb-2 text-muted">
            {movie.genre}
        </p>
    )
}

export default MovieGenreLabel

