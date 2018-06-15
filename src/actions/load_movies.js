//@flow

import axios from 'axios'
import { LOAD_MOVIES, BASE_URL } from '.'
import type { SearchScope } from '../types/search'
import { searchScopes } from '../types/search'

import type { SortKey } from '../types/sorting'
import type { SortOrder } from '../types/sorting'
import { sortKeys, sortOrders } from '../types/sorting'


import type { Query } from '../types/query'
import type { Action } from '../types/action'

export const loadMovies = (query: Query): Action => {
    const { term, searchScope, sortKey, sortOrder } = query

    const url = `${BASE_URL}/movies`

    const sortBy = { sortBy: sortKeys[sortKey] }
    const params = {
        search: term,
        searchBy: searchScopes[searchScope],
        sortOrder: sortOrders[sortOrder],
        ...sortBy
    }

    const request = axios.get(url, { params })

    return {
        type: LOAD_MOVIES,
        payload: request
    }
}
