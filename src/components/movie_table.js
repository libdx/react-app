//@flow

import React, { Component } from 'react'
import Movie from '../movie'
import MovieCard from './movie_card'

type MovieTableProps = {
    movies: Array<Movie>
}

const MovieTable = ({ movies }: MovieTableProps) => {

    const items = movies.map((movie, index) => {
        return (
            <div key={index} className="col-md-4 col-sm-6">
                <MovieCard movie={movie} />
            </div>
        )
    })

    return (
        <div className="row">
            {items}
        </div>
    )
}

export default MovieTable
