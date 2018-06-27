// @flow

import React from 'react';
import { overview } from '../types/movie';
import type { Movie } from '../types/movie';

type Props = {
    movie: Movie
}

const MovieDescription = ({ movie }: Props) => <p> {overview(movie)} </p>;

export default MovieDescription;
