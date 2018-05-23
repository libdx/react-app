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

type Props = {}

type State = {}

class IndexPage extends React.Component<Props, State> {

    render() {
        const brand = "Movieseek"

        return (
            <div>
                <Header brand={brand}>
                    <FilterPanel />
                </Header>
                <StatusBar title="Search results" />
                <MovieResultsGrid />
                <Footer brand={brand} />
            </div>
        )
    }
}

export default IndexPage

