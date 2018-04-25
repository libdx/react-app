//@flow

import React, { Component } from 'react'
import Movie from '../movie.js'

type MovieCardProps = {
    movie: Movie,
    index: number
}

const MovieCard = (props: MovieCardProps) => {
    // TODO: provide planceholder if image loading if failed

    return (
        <div key={props.index} className="col-sm">
            <img src={props.movie.imageURL} />
        </div>
    )
}

export default MovieCard
