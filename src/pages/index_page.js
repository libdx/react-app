//@flow

import React, { Component } from 'react'
import Button from '../components/button'
import StatusBar from '../components/status_bar'
import SearchPanel from '../components/search_panel'
import ButtonGroup from '../components/button_group'
import Header from '../components/header'
import MovieGrid from '../components/movie_grid'
import Footer from '../components/footer'

import { forrest } from '../data/mocks'

const criteria = {
    TITLE: "TITLE",
    GENRE: "GENRE"
}

const criteriaOrder = [criteria.TITLE, criteria.GENRE]

type Criteria = $Keys<typeof criteria>

type Props = {
}

type State = {
    term: string,
    searchBy: Criteria,
}

class IndexPage extends React.Component<Props, State> {
    onTermChange: (term: string) => void
    onTitleButtonClick: () => void
    onGenerButtonClick: () => void
    onButtonGroupClick: (index: number) => void

    constructor(props: Props) {
        super(props)
        this.state = {
            term: '',
            searchBy: criteria.TITLE
        }
        this.onTermChange = this.onTermChange.bind(this)

        this.onButtonGroupClick = this.onButtonGroupClick.bind(this)
    }

    onButtonGroupClick(index: number): void {
        const searchBy = criteriaOrder[index]

        console.log(searchBy)
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
                            buttonTitles={["Title", "Genre"]}
                            selectedIndex={criteriaOrder.indexOf(searchBy)}
                            onClick={this.onButtonGroupClick}
                        />
                    </SearchPanel>
                </Header>
                <StatusBar title="Search results" />
                <MovieGrid movies={[forrest, forrest, forrest, forrest, forrest, forrest]} />
                <Footer brand={brand} />
            </div>
        )
    }
}

export default IndexPage

