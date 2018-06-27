// @flow

import { SEARCH_MOVIES } from '.';
import type { Query } from '../types/query';
import type { Action } from '../types/action';

export const searchMovies = (query: Query): Action => ({
  type: SEARCH_MOVIES,
  payload: query,
});
