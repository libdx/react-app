//@flow

import type { Movie } from '../types/movie'

export const forrest: Movie = {
    id: 13,
    title: "Forrest Gump",
    tagline: "Life is like a box of chocolates...you never know what you're gonna get.",
    vote_average: 8.3,
    vote_count: 10297,
    release_date: "1994-07-06",
    poster_path: "https://image.tmdb.org/t/p/w500/yE5d3BUhE8hCnkMUJOo1QDoOGNz.jpg",
    overview: "A man with a low IQ has accomplished great things in his life and been present during significant historic events - in each case, far exceeding what anyone imagined he could do. Yet, despite all the things he has attained, his one true love eludes him. 'Forrest Gump' is the story of a man who rose above his challenges, and who proved that determination, courage, and love are more important than ability.",
    budget: 55000000,
    revenue: 677945399,
    genres: ["Comedy", "Drama", "Romance"],
    runtime: 142
}

export const movies = [forrest, forrest, forrest, forrest, forrest, forrest]

