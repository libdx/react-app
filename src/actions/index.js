//@flow

import axios from 'axios'
import type { SearchScope } from '../types/search'
import { searchScopes } from '../types/search'

import type { SortKey } from '../types/sorting'
import type { SortOrder } from '../types/sorting'
import { sortKeys, sortOrders } from '../types/sorting'

import type { Query } from '../types/query'

export const SEARCH_MOVIES = 'SEARCH_MOVIES'
export const FETCH_MOVIES = 'FETCH_MOVIES'

export type Action = {
    type: string,
    payload: any,
    meta?: any,
    error?: Error
}

export const searchMovies = (query: Query): Action => ({
    type: SEARCH_MOVIES,
    payload: query
})

export const fetchMovies = (query: Query): Action => {
    const { term, searchScope, sortKey, sortOrder } = query

    const baseURL = 'http://react-cdp-api.herokuapp.com'
    const url = `${baseURL}/movies`

    const sortBy = { sortBy: sortKeys[sortKey] }
    const params = {
        search: term,
        searchBy: searchScopes[searchScope],
        sortOrder: sortOrders[sortOrder],
        ...sortBy
    }

    const request = axios.get(url, { params })

    return {
        type: FETCH_MOVIES,
        payload: request
    }
}

