//@flow

import React, { Component } from 'react'

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

type Props = {}
type State = {}

class IndexPage extends Component<Props, State> {

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

export default IndexPage

