//@flow
import { SORT_MOVIES } from '../actions'

import type { SortKeyAction } from '../actions'
import type { SortKey } from '../types/sort_order'

const sortKey = (state: SortKey = 'NONE', action: SortKeyAction) => {
    switch (action.type) {
        case SORT_MOVIES:
            return action.payload
        default:
            return state
    }
}

export default sortKey

