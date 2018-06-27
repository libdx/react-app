// @flow

import axios from 'axios';
import { LOAD_MOVIE, BASE_URL } from '.';
import type { Action } from '../types/action';

export const loadMovie = (movieID: number): Action => {
  const url = `${BASE_URL}/movies/${movieID}`;

  const request = axios.get(url);

  return {
    type: LOAD_MOVIE,
    payload: request,
  };
};
