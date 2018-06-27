// @flow

import { SELECT_MOVIE } from '.';

import type { Action } from '../types/action';
import type { Movie } from '../types/movie';

export const selectMovie = (movie: Movie): Action => ({
  type: SELECT_MOVIE,
  payload: movie,
});
