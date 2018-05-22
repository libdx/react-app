//@flow

import React, { Component } from 'react'
import axios from 'axios'
import _ from 'lodash'

import Button from '../components/button'
import StatusBar from '../components/status_bar'
import SearchPanel from '../components/search_panel'
import ButtonGroup from '../components/button_group'
import Header from '../components/header'
import MovieGrid from '../components/movie_grid'
import Footer from '../components/footer'

import MovieResultsGrid from '../containers/movie_results_grid'
import FilterPanel from '../containers/filter_panel'

import type { ButtonRecord } from '../components/button_group'
import type { Movie } from '../movie'
import type { Criteria } from '../types/criteria'
import { criteria } from '../types/criteria'
import { forrest, movies as mockedMovies } from '../data/mocks'

type Props = {
}

type State = {
    term: string,
    searchBy: Criteria,
    movies: Array<Movie>,
}

const fetchMovies = (term: string, searchBy: Criteria): Promise<Array<Movie>> => {
    const url = `http://react-cdp-api.herokuapp.com/movies?search=${term}&searchBy=${criteria[searchBy]}`

    const parse = (json) => {
       return json['data']
    }

    return axios.get(url)
        .catch(console.error)
        .then(res => res.data)
        .then(parse)
}

class IndexPage extends React.Component<Props, State> {
    onTermChange: (term: string) => void
    onButtonGroupClick: (id: Criteria) => void
    searchMovies: () => void

    constructor(props: Props) {
        super(props)
        this.state = {
            term: 'matrix',
            searchBy: 'TITLE',
            movies: mockedMovies
        }
        this.onTermChange = this.onTermChange.bind(this)
        this.onButtonGroupClick = this.onButtonGroupClick.bind(this)
        this.searchMovies = _.debounce(this.searchMovies.bind(this), 300)
    }

    searchMovies() {
        const { term, searchBy } = this.state

        fetchMovies(term, searchBy)
            .then(movies => this.setState({ movies }) )
    }

    componentDidMount() {
        this.searchMovies()
    }

    onButtonGroupClick(id: Criteria): void {
        const searchBy = id
        this.setState({ searchBy }, () => {
            console.log(this.state.searchBy)
            this.searchMovies()
        })
    }

    onTermChange(term: string) {
        this.setState({ term }, () => {
            console.log(this.state.term)
            this.searchMovies()
        })
    }

    render() {
        const brand = "Movieseek"
        const { term, searchBy, movies } = this.state

        return (
            <div>
                <Header brand={brand}>
                    <FilterPanel />
                </Header>
                <StatusBar title="Search results" />
                <MovieResultsGrid movies={movies} />
                <Footer brand={brand} />
            </div>
        )
    }
}

//const mapStateToProps

export default IndexPage

