// @flow

import { FETCH_RELEVANT_MOVIES } from '.';
import { loadRelevantMovies } from './load_relevant_movies';

import type { Action } from '../types/action';

export const fetchRelevantMovies = (genre: string): Action => {
  const thunk = (dispatch) => {
    dispatch(loadRelevantMovies(genre));
  };
  thunk.meta = {
    debounce: {
      time: 300,
      key: FETCH_RELEVANT_MOVIES,
    },
  };

  return thunk;
};
