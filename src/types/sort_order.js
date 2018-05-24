export const sortKey = {
    NONE: 'none',
    RELEASE_DATE: 'release-date',
    RATING: 'rating'
}

export type SortKey = $Keys<typeof sortKey>

