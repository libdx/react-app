//@flow

import React from 'react'
import MovieCard from './movie_card'
import EmptyState from './empty_state'

import type { Movie } from '../types/movie'

type Props = {
    movies: Array<Movie>,
    onClick?: (id: number) => void
}

const MovieGrid = ({ movies, onClick }: Props) => {

    const items = movies.map(movie => {
        return (
            <div key={movie.id} className="col-md-4 col-sm-6">
                <MovieCard movie={movie} onClick={ () => onClick && onClick(movie.id) }/>
            </div>
        )
    })

    const children = items.length > 0 ? items : <div className="col-sm-12"><EmptyState /></div>

    return (
        <div className="row">
            {children}
        </div>
    )
}

export default MovieGrid
