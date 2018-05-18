//@flow

import React from 'react'
import { overview } from '../movie'
import type { Movie } from '../movie'

type Props = {
    movie: Movie
}

const MovieDescription = ({ movie }: Props) => {
    return <p> {overview(movie)} </p>
}

export default MovieDescription
