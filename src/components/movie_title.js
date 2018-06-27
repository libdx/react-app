// @flow

import React from 'react';
import { title, releaseYear } from '../types/movie';

import type { Movie } from '../types/movie';

type BadgeAlign = "left" | "right"

type Props = {
    movie: Movie,
    badgeAlign?: BadgeAlign
}

const MovieTitle = ({ movie, badgeAlign = 'right' }: Props) => {
  const badgeAlignClass = badgeAlign == 'right' ? 'alignright' : 'badge-margin-left';

  return (
        <h6 className="card-title textbox">
            <span className="alignleft">{title(movie)}</span>
            <span className={`badge badge-light ${badgeAlignClass}`}>{releaseYear(movie)}</span>
            <div className="alighclear" />
        </h6>
  );
};

export default MovieTitle;
