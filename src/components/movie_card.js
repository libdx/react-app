//@flow

import React, { Component } from 'react'
import Movie from '../movie'

type MovieCardProps = {
    movie: Movie
}

const MovieCard = (props: MovieCardProps) => {
    // TODO: provide planceholder if image loading if failed

    return (
        <div>
            <img src={props.movie.imageURL} />
        </div>
    )
}

export default MovieCard
