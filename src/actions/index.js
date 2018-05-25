//@flow

import axios from 'axios'
import type { Criteria } from '../types/criteria'
import { criteria } from '../types/criteria'

import type { SortKey } from '../types/sort_order'
import { sortKey } from '../types/sort_order'

export const FILTER_MOVIES = 'FILTER_MOVIES'
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
    type: FILTER_MOVIES,
    payload: query
})

export const fetchMovies = (query: Query): Action => {
    const { term, searchBy } = query
    const baseURL = 'http://react-cdp-api.herokuapp.com'
    const url = `${baseURL}/movies?search=${term}&searchBy=${criteria[searchBy]}`
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

