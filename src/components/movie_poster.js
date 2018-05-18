//@flow

import React from 'react'
import { posterURL } from '../movie'
import type { Movie } from '../movie'

type Props = {
    movie: Movie
}

const MoviePoster = ({ movie }: Props) => {
    return <img className="card-img-top poster-img" src={posterURL(movie)} />
}

export default MoviePoster

