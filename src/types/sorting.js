export const sortKeys = {
    RELEASE_DATE: 'release_date',
    RATING: 'vote_average'
}

export type SortKey = $Keys<typeof sortKeys>

export const sortOrders =  {
    ASC: 'asc',
    DESC: 'desc',
}

export type SortOrder = $Key<typeof sortOrders>

