//@flow

import React, { Component } from 'react'
import MovieTitle from './movie_title'
import type { Movie } from '../movie'
import '../styles/common.css'

type Props = {
    movie: Movie
}

const MovieCard = ({ movie }: Props) => {
    return (
        <div className="card movie-card">
            <img className="card-img-top" src={movie.imageURL} />
            <div className="card-body movie-card-body">
                <MovieTitle movie={movie} />
                <p className="card-subtitle mb-2 text-muted">
                    {movie.genre}
                </p>
            </div>
        </div>
    )
}

export default MovieCard
