//@flow

import React, { Component } from 'react'
import type { Movie } from '../movie'
import '../styles/common.css'

type Props = {
    movie: Movie
}

const MovieDetails = ({movie}: Props) => {
    return (
        <div className="card movie-details">
            <div className="row">
                <div className="col-md-4">
                    <img className="w-100" src={movie.imageURL} />
                </div>
                <div className="col-md-8 card-body movie-details-body">
                    <h6 className="card-title">
                        <span className="">{movie.title}</span>
                        <span className="">{movie.releaseYear}</span>
                    </h6>
                    <p className="card-text mb-2 text-muted">
                        {movie.genre}
                    </p>
                    <p>
                        {movie.description}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default MovieDetails
