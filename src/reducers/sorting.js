//@flow
import { SORT_MOVIES } from '../actions'

import type { Action } from '../actions'
import type { SortKey } from '../types/sorting'

const sortKey = (state: SortKey = 'RELEASE_DATE', action: Action) => {
    switch (action.type) {
        case SORT_MOVIES:
            return action.payload
        default:
            return state
    }
}

export default sortKey

