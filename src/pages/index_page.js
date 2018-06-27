//@flow

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import _ from 'lodash'

import { loadMovies } from '../actions/load_movies'
import { searchMovies } from '../actions/search_movies'
import { fetchMovies } from '../actions/fetch_movies'

import Button from '../components/button'
import StatusBar from '../components/status_bar'
import SearchPanel from '../components/search_panel'
import ButtonGroup from '../components/button_group'
import Header from '../components/header'
import MovieGrid from '../components/movie_grid'
import Footer from '../components/footer'

import MovieResultsGrid from '../containers/movie_results_grid'
import SortingStatusBar from '../containers/sorting_status_bar'
import SearchResultsPanel from '../containers/search_results_panel'

import type { ButtonRecord } from '../components/button_group'
import type { Movie } from '../types/movie'
import type { Query } from '../types/query'
import type { Action } from '../types/action'

type Props = {
    query: Query,
    match: any,
    setQuery: (query: Query) => void
}

class IndexPage extends Component<Props> {

    static defaultProp = {
        query: { term: '' },
        match: { params: {} },
        setQuery: () => {}
    }

    syncQuery() {
        const { query, match, setQuery } = this.props

        const term = match.params.term || ''
        if (term !== query.term) {
            setQuery && setQuery({ ...query, term })
        }
    }

    componentDidMount() {
        this.syncQuery()
    }

    render() {
        const brand = "Movieseek"

        return (
            <div>
                <Header brand={brand}>
                    <SearchResultsPanel title="Search by"/>
                </Header>
                <SortingStatusBar title="Search results" />
                <MovieResultsGrid />
                <Footer brand={brand} />
            </div>
        )
    }
}

export const prefetchData = (query: Query): Promise<any> => {
    const action = loadMovies(query)
    return action.payload.then( response => ({ movies: response.data.data }) )
}

const mapStateToProps = (state, ownProps) => ({
    ...ownProps,
    query: state.query
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    setQuery: (query) => {
        dispatch(fetchMovies(query))
        dispatch(searchMovies(query))
    },
    ...ownProps
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(IndexPage))

