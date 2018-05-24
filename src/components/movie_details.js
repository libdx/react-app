//@flow

import React, { Component } from 'react'
import MovieTitle from './movie_title'
import MovieGenreLabel from './movie_genre_label'
import MoviePoster from './movie_poster'
import MovieDescription from './movie_description'
import type { Movie } from '../types/movie'

type Props = {
    movie: Movie
}

const MovieDetails = ({movie}: Props) => {
    return (
        <div className="card movie-details">
            <div className="row">
                <div className="col-md-4">
                    <MoviePoster movie={movie} />
                </div>
                <div className="col-md-8 card-body movie-details-body">
                    <div className="movie-details-title-box">
                        <MovieTitle movie={movie} badgeAlign="left" />
                    </div>
                    <MovieGenreLabel movie={movie} />
                    <MovieDescription movie={movie} />
                </div>
            </div>
        </div>
    )
}

export default MovieDetails
