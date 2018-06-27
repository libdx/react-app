// @flow

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

export const movieID = (movie: Movie): number => movie.id;

export const topmostGenre = (movie: Movie): string => movie.genres[0];

export const genre = (movie: Movie): string => movie.genres.join(', ');

export const title = (movie: Movie): string => `${movie.title} (${movie.vote_average})`;

export const releaseYear = (movie: Movie): number => {
  const date = new Date(movie.release_date);
  return date.getFullYear();
};

export const overview = (movie: Movie): string => movie.overview;

export const posterURL = (movie: Movie): string => movie.poster_path;

export const date = (movie: Movie): Date => new Date(movie.release_date);

export const raiting = (movie: Movie): number => movie.vote_average;
