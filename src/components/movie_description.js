//@flow

import React from 'react'
import type { Movie } from '../movie'

type Props = {
    movie: Movie
}

const MovieDescription = ({ movie }: Props) => {
    return <p> {movie.description} </p>
}

export default MovieDescription
