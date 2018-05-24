export const sortOrder = {
    NONE: 'none',
    RELEASE_DATE: 'release-date',
    RATING: 'rating'
}

export type SortOrder = $Keys<typeof sortOrder>

