// @flow

import React from 'react';
import { genre } from '../types/movie';
import type { Movie } from '../types/movie';

type Props = {
    movie: Movie
}

const MovieGenreLabel = ({ movie }: Props) => (
        <p className="card-subtitle mb-2 text-muted">
            {genre(movie)}
        </p>
);

export default MovieGenreLabel;
