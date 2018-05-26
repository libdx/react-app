//@flow

import axios from 'axios'
import type { SearchScope } from '../types/search'
import { searchScopes } from '../types/search'

import type { SortKey } from '../types/sorting'
import { sortKeys } from '../types/sorting'

import type { Query } from '../types/query'

export const SEARCH_MOVIES = 'SEARCH_MOVIES'
export const FETCH_MOVIES = 'FETCH_MOVIES'
export const SORT_MOVIES = 'SORT_MOVIES'

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
    const { term, searchScope } = query
    const baseURL = 'http://react-cdp-api.herokuapp.com'
    const url = `${baseURL}/movies`
    const request = axios.get(url, {
        params: {
            search: term,
            searchBy: searchScopes[searchScope]
        }
    })

    return {
        type: FETCH_MOVIES,
        payload: request
    }
}

export const sortMovies = (sortKey: SortKey): Action => {
    return {
        type: SORT_MOVIES,
        payload: sortKey
    }
}

