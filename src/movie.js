//@flow

export type Movie = {
    id: number,
    title: string,
    tagline: string,
    vote_average: number,
    vote_count: number,
    release_date: string,
    poster_path: string,
    overview: string,
    budget: number,
    revenue: number,
    runtime: number,
    genres: Array<string>,
}

export const genre = (movie: Movie): string => {
    return movie.genres.join(', ')
}

export const title = (movie: Movie): string => {
    return movie.title
}

export const releaseYear = (movie: Movie): number => {
    const date = new Date(movie.release_date)
    return date.getFullYear()
}

export const overview = (movie: Movie): string => {
    return movie.overview
}

export const posterURL = (movie: Movie): string => {
    return movie.poster_path
}

