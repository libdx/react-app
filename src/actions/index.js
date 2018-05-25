//@flow

import axios from 'axios'
import type { Criteria } from '../types/search'
import { searchScopes } from '../types/search'

import type { SortKey } from '../types/sorting'
import { sortKey } from '../types/sorting'

export const SEARCH_MOVIES = 'SEARCH_MOVIES'
export const FETCH_MOVIES = 'FETCH_MOVIES'
export const SORT_MOVIES = 'SORT_MOVIES'

export type Action = {
    type: string,
    payload: any,
    meta?: any,
    error?: Error
}

type Query = {
    term: string,
    searchBy: Criteria
}

export const searchMovies = (query: Query): Action => ({
    type: SEARCH_MOVIES,
    payload: query
})

export const fetchMovies = (query: Query): Action => {
    const { term, searchBy } = query
    const baseURL = 'http://react-cdp-api.herokuapp.com'
    const url = `${baseURL}/movies?search=${term}&searchBy=${searchScopes[searchBy]}`
    const request = axios.get(url)

    return {
        type: FETCH_MOVIES,
        payload: request,
        meta: {
            debounce: {
                time: 300,
                key: FETCH_MOVIES
            }
        }
    }
}

export const sortMovies = (sortKey: SortKey): Action => {
    return {
        type: SORT_MOVIES,
        payload: sortKey
    }
}

