//@flow

import React, { Component } from 'react'
import Movie from '../movie'
import MovieCard from './movie_card'

type MovieTableProps = {
    movies: Array<Movie>
}

const MovieTable = ({ movies }: MovieTableProps) => {

    const cols = 3

    let slices = []
    for (let i = 0; i + cols <= movies.length; i+=cols) {
        let slice = movies.slice(i, i + cols)
        slices = slices.concat([slice])
    }

    const row = slice => {
        return (
            slice.map((movie, index) => {
                return (
                    <div key={index} className="col-sm">
                        <MovieCard index={index} movie={movie} />
                    </div>
                )
            })
        )
    }

    const cards = slices.map((slice, index) => {
        return (
            <div key={index} className="row">
                {row(slice)}
            </div>
        )
    })

    return cards
}

export default MovieTable
