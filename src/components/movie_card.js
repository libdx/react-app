//@flow

import React, { Component } from 'react'
import MovieTitle from './movie_title'
import MovieGenreLabel from './movie_genre_label'
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
                <MovieGenreLabel movie={movie} />
            </div>
        </div>
    )
}

export default MovieCard
