export const sortKey = {
    NONE: 'none',
    RELEASE_DATE: 'release_date',
    RATING: 'vote_average'
}

export type SortKey = $Keys<typeof sortKey>

export const sortOrder =  {
    ASC: 'asc',
    DESC: 'desc',
}

export type SortOrder = $Key<typeof sortOrder>

