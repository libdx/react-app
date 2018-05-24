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

export type FilterMoviesAction = {
    type: string,
    payload: Query,
}

type FetchMoviesAction = {
    type: string,
    payload: any,
}

export type SortKeyAction = {
    type: string,
    payload: string
}

export const filterMovies = (filter: Query): FilterMoviesAction => ({
    type: FILTER_MOVIES,
    payload: filter
})

export const fetchMovies = (filter: Query): FetchMoviesAction => {
    const { term, searchBy } = filter
    const url = `http://react-cdp-api.herokuapp.com/movies?search=${term}&searchBy=${criteria[searchBy]}`
    const request = axios.get(url)

    return {
        type: FETCH_MOVIES,
        payload: request,
        meta: {
            debounce: {
                time: 300,
                key: 'default'
            }
        }
    }
}

export const sortMovies = (sortKey: SortKey): SortKeyAction => {
    return {
        type: SORT_MOVIES,
        payload: sortKey
    }
}

