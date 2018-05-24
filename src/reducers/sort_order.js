//@flow
import { SORT_MOVIES } from '../actions'

import type { Action } from '../actions'
import type { SortKey } from '../types/sort_order'

const sortKey = (state: SortKey = 'NONE', action: Action) => {
    switch (action.type) {
        case SORT_MOVIES:
            return action.payload
        default:
            return state
    }
}

export default sortKey

