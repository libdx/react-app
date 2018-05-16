//@flow

import React from 'react'
import type { Movie } from '../movie'

type Props = {
    movie: Movie
}

const MoviePoster = ({ movie }: Props) => {
    return <img className="card-img-top poster-img" src={movie.imageURL} />
}

export default MoviePoster

