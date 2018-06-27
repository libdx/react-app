// @flow

import axios from 'axios';
import { BASE_URL, LOAD_RELEVANT_MOVIES } from '.';
import { searchScopes } from '../types/search';
import { sortKeys, sortOrders } from '../types/sorting';

import type { Query } from '../types/query';
import type { Action } from '../types/action';

export const loadRelevantMovies = (genre: string): Action => {
  const url = `${BASE_URL}/movies`;

  const params = {
    search: genre,
    searchBy: searchScopes.GENRE,
    sortOrder: sortOrders.DESC,
    sortKey: sortKeys.RATING,
  };

  const request = axios.get(url, { params });

  return {
    type: LOAD_RELEVANT_MOVIES,
    payload: request,
  };
};
