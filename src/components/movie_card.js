// @flow

import React, { Component } from 'react';
import MovieTitle from './movie_title';
import MovieGenreLabel from './movie_genre_label';
import MoviePoster from './movie_poster';
import type { Movie } from '../types/movie';

type Props = {
    movie: Movie,
    onClick?: () => void
}

const MovieCard = ({ movie, onClick }: Props) => (
        <div className="card movie-card" onClick={e => onClick && onClick()}>
            <MoviePoster movie={movie} />
            <div className="card-body movie-card-body">
                <MovieTitle movie={movie} />
                <MovieGenreLabel movie={movie} />
            </div>
        </div>
);

export default MovieCard;
