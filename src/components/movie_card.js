//@flow

import React, { Component } from 'react'
import MovieTitle from './movie_title'
import MovieGenreLabel from './movie_genre_label'
import MoviePoster from './movie_poster'
import type { Movie } from '../movie'
import '../styles/common.css'

type Props = {
    movie: Movie
}

const MovieCard = ({ movie }: Props) => {
    return (
        <div className="card movie-card">
            <MoviePoster movie={movie} />
            <div className="card-body movie-card-body">
                <MovieTitle movie={movie} />
                <MovieGenreLabel movie={movie} />
            </div>
        </div>
    )
}

export default MovieCard
