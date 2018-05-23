//@flow

import axios from 'axios'
import type { Criteria } from '../types/criteria'
import { criteria } from '../types/criteria'

export const FILTER_MOVIES = 'FILTER_MOVIES'
export const FETCH_MOVIES = 'FETCH_MOVIES'

type Filter = {
    term: string,
    searchBy: Criteria
}

export type FilterMoviesAction = {
    type: string,
    payload: Filter,
}

type FetchMoviesAction = {
    type: string,
    payload: any,
}

export const filterMovies = (filter: Filter): FilterMoviesAction => ({
    type: FILTER_MOVIES,
    payload: filter
})

export const fetchMovies = (filter: Filter): FetchMoviesAction => {
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

