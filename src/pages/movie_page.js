//@flow

import React, { Component } from 'react'

import Header from '../components/header'
import MovieGrid from '../components/movie_grid'
import Footer from '../components/footer'
import MovieDetails from '../components/movie_details'
import StatusBar from '../components/status_bar'
import { mostAppropriateGenre } from '../types/movie'

import { forrest as movie, movies } from '../data/mocks' //tmp

type Props = {}

class MoviePage extends Component<Props> {
    render() {
        const brand = "Movieseek"

        const genre: string = mostAppropriateGenre(movie) || ''

        return (
            <div>
                <Header brand={brand}>
                    <MovieDetails movie={movie} />
                </Header>
                <StatusBar title={`Movies by ${genre}`} />
                <MovieGrid movies={movies} />
                <Footer brand={brand} />
            </div>
        )
    }
}

export default MoviePage
