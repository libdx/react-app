//@flow

import React, { Component } from 'react'
import Button from '../components/button'
import StatusBar from '../components/status_bar'
import SearchPanel from '../components/search_panel'
import ButtonGroup from '../components/button_group'
import Header from '../components/header'
import MovieGrid from '../components/movie_grid'
import Footer from '../components/footer'

import type { ButtonRecord } from '../components/button_group'
import { forrest, movies } from '../data/mocks'

const criteria = {
    TITLE: "TITLE",
    GENRE: "GENRE"
}

const criteriaOrder = [criteria.TITLE, criteria.GENRE]

const buttonRecords: Array<ButtonRecord> = [
    {id: criteria.TITLE, title: "Title"},
    {id: criteria.GENRE, title: "Genre"}
]

type Criteria = $Keys<typeof criteria>

type Props = {
}

type State = {
    term: string,
    searchBy: Criteria,
}

class IndexPage extends React.Component<Props, State> {
    onTermChange: (term: string) => void
    onButtonGroupClick: (id: Criteria) => void

    constructor(props: Props) {
        super(props)
        this.state = {
            term: '',
            searchBy: criteria.TITLE
        }
        this.onTermChange = this.onTermChange.bind(this)
        this.onButtonGroupClick = this.onButtonGroupClick.bind(this)
    }

    onButtonGroupClick(id: Criteria): void {
        const searchBy = id
        this.setState({ searchBy })
    }

    onTermChange(term: string) {
        this.setState({ term })
    }

    render() {
        const brand = "Movieseek"
        const { term, searchBy } = this.state

        return (
            <div>
                <Header brand={brand}>
                    <SearchPanel term={term} onChange={this.onTermChange} >
                        <ButtonGroup
                            title="Search by"
                            buttons={buttonRecords}
                            selectedButtonId={searchBy}
                            onClick={this.onButtonGroupClick}
                        />
                    </SearchPanel>
                </Header>
                <StatusBar title="Search results" />
                <MovieGrid movies={movies} />
                <Footer brand={brand} />
            </div>
        )
    }
}

export default IndexPage

