// @flow
import { LOAD_MOVIES } from '../actions';
import { title, date, raiting } from '../types/movie';

import type { Movie } from '../types/movie';
import type { Action } from '../types/action';

const fetchMovies = (state: Array<Movie> = [], action: Action): Array<Movie> => {
  switch (action.type) {
    case LOAD_MOVIES:
      return action.payload.data.data || state;
    default:
      return state;
  }
};

export default fetchMovies;
