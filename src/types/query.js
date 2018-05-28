import type { SearchScope } from './search'
import type { SortKey } from './sorting'
import type { SortOrder } from './sorting'

export type Query = {
    term: string,
    searchScope: SearchScope,
    sortKey: SortKey,
    sortOrder: SortOrder,
}

