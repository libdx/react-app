// @flow

import { FETCH_MOVIES } from '.';
import { loadMovies } from './load_movies';

import type { Query } from '../types/query';
import type { Action } from '../types/action';

export const fetchMovies = (query: Query): Action => {
  const thunk = (dispatch) => {
    dispatch(loadMovies(query));
  };
  thunk.meta = {
    debounce: {
      time: 300,
      key: FETCH_MOVIES,
    },
  };

  return thunk;
};
