export const SEARCH_MOVIE = 'SEARCH_MOVIE'

export const searchMovies = (term) => ({
    type: SEARCH_MOVIE,
    payload: term
})

