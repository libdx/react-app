//@flow

import React from 'react'
import { genre } from '../movie'
import type { Movie } from '../movie'

type Props = {
    movie: Movie
}

const MovieGenreLabel = ({ movie }: Props) => {
    return (
        <p className="card-subtitle mb-2 text-muted">
            {genre(movie)}
        </p>
    )
}

export default MovieGenreLabel

