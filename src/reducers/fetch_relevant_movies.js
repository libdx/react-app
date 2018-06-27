// @flow

import { LOAD_RELEVANT_MOVIES } from '../actions';

import type { Movie } from '../types/movie';
import type { Action } from '../types/action';

const fetchRelevantMovies = (state: Array<Movie> = [], action: Action): Array<Movie> => {
  switch (action.type) {
    case LOAD_RELEVANT_MOVIES:
      return action.payload.data.data || state;
    default:
      return state;
  }
};

export default fetchRelevantMovies;
