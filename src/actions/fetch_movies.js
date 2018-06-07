//@flow

import axios from 'axios'
import { FETCH_MOVIES } from '.'
import type { SearchScope } from '../types/search'
import { searchScopes } from '../types/search'

import type { SortKey } from '../types/sorting'
import type { SortOrder } from '../types/sorting'
import { sortKeys, sortOrders } from '../types/sorting'

import type { Query } from '../types/query'
import type { Action } from '../types/action'

export const BASE_URL = 'http://react-cdp-api.herokuapp.com'

export const fetchMovies = (query: Query): Action => {
    const { term, searchScope, sortKey, sortOrder } = query

    const BASE_URL = 'http://react-cdp-api.herokuapp.com'
    const url = `${BASE_URL}/movies`

    const sortBy = { sortBy: sortKeys[sortKey] }
    const params = {
        search: term,
        searchBy: searchScopes[searchScope],
        sortOrder: sortOrders[sortOrder],
        ...sortBy
    }

    const thunk = dispatch => {
        const request = axios.get(url, { params })

        dispatch({
            type: FETCH_MOVIES,
            payload: request
        })
    }
    thunk.meta = {
        debounce: {
            time: 300,
            key: FETCH_MOVIES
        }
    }

    return thunk
}

