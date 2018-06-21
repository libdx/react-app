//@flow

import React, { Component } from 'react'
import { connect } from 'react-redux'

import Header from '../components/header'
import MovieGrid from '../components/movie_grid'
import Footer from '../components/footer'
import MovieDetails from '../components/movie_details'
import StatusBar from '../components/status_bar'
import { fetchMovie } from '../actions/fetch_movie'
import { mostAppropriateGenre } from '../types/movie'

import type { Movie } from '../types/movie'
import { forrest, movies } from '../data/mocks' //tmp

type Params = {
    id?: string
}

type Match = {
    params: Params
}

type Props = {
    match?: Match,
    movie?: Movie,
    fetchMovie?: (id: number) => void
}

class MoviePage extends Component<Props> {
    componentDidMount() {
        const { match, fetchMovie } = this.props

        if (match) {
            const id = parseInt(match.params.id)
            fetchMovie && fetchMovie(id)
        }
    }

    render() {
        const { movie } = this.props

        const brand = "Movieseek"

        let genre: string = ''
        if (movie) {
            genre = mostAppropriateGenre(movie) || ''
        }

        return (
            <div>
                <Header brand={brand}>
                    {movie ? <MovieDetails movie={movie} /> : "Placeholder" }
                </Header>
                <StatusBar title={`Movies by ${genre}`} />
                <MovieGrid movies={movies} />
                <Footer brand={brand} />
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => ({
    ...ownProps,
    movie: state.currentMovie
})

const mapDispatchToProps = dispatch => ({
    fetchMovie: (id: number) => {
        dispatch(fetchMovie(id))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(MoviePage)
