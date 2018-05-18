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

export function genre(movie: Movie): string {
    return movie.genres.join(', ')
}

export function title(movie: Movie): string {
    return movie.title
}

export function releaseYear(movie: Movie): number {
    const date = new Date(movie.release_date)
    return date.getFullYear()
}

export function overview(movie: Movie): string {
    return movie.overview
}

export function posterURL(movie: Movie): string {
    return movie.poster_path
}

