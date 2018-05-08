//@flow

import React, { Component } from 'react'
import type { Movie } from '../movie'
import '../styles/common.css'

type MovieCardProps = {
    movie: Movie
}

const MovieCard = ({movie}: MovieCardProps) => {
    // TODO: provide planceholder if image loading failed

    return (
        <div className="card movie-card">
            <img className="card-img-top" src={movie.imageURL} />
            <div className="card-body movie-card-body">
                <h6 className="card-title textbox">
                    <span className="alignleft">{movie.title}</span>
                    <span className="badge badge-light alignright">{movie.releaseYear}</span>
                    <div className="alighclear" />
                </h6>
                <p className="card-subtitle mb-2 text-muted">
                    {movie.genre}
                </p>
            </div>
        </div>
    )
}

export default MovieCard
