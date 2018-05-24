//@flow
import { SORT_MOVIES } from '../actions'

import type { SortOrderAction } from '../actions'
import type { SortOrder } from '../types/sort_order'

const sortOrder = (state: SortOrder = 'NONE', action: SortOrderAction) => {
    switch (action.type) {
        case SORT_MOVIES:
            return action.payload
        default:
            return state
    }
}

export default sortOrder

