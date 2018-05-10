//@flow

import React from 'react'
import type { Movie } from '../movie'

type Props = {
    movie: Movie
}

const MoviePoster = ({ movie }: Props) => {
    return <img className="card-img-top" src={movie.imageURL} />
}

export default MoviePoster

