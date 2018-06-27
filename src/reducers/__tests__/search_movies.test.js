import { SEARCH_MOVIES } from '../../actions';
import { searchMovies } from '../../actions/search_movies';
import reducer, { defaultQuery } from '../search_movies';

describe('searchMovies reducer', () => {
  it('returns default state', () => {
    expect(reducer(undefined, {})).toEqual(defaultQuery);
  });

  it('handles SEARCH_MOVIES action', () => {
    const query = {
      term: 'abc',
      searchScope: 'GENRE',
      sortKey: 'RATING',
      sortOrder: 'DESC',
    };
    const action = searchMovies(query);
    expect(reducer(null, action)).toEqual(query);
  });

  it('updates (replaces) old state', () => {
    const query = {
      term: 'abc',
      searchScope: 'GENRE',
      sortKey: 'RATING',
      sortOrder: 'DESC',
    };
    const oldState = defaultQuery;

    const action = searchMovies(query);
    expect(reducer(oldState, action)).toEqual(query);
  });
});
