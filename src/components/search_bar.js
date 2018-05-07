//@flow

import React, { Component } from 'react'
import Button from './button'
import SearchInput from './search_input'
import FilterButtonGroup from './filter_button_group'

const criteria = {
    TITLE: "TITLE",
    GENRE: "GENRE"
}

const criteriaOrder = [criteria.TITLE, criteria.GENRE]

type SearchBy = $Keys<typeof criteria>

type ButtonStyles = {
    title: string,
    gener: string
}

type Props = {
}

type State = {
    term: string,
    searchBy: SearchBy,
}

export default class SearchBar extends React.Component<Props, State> {
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
        const state = this.state

        return (
            <div className="search-bar">
                <SearchInput
                    term={state.term}
                    placeholder="Search"
                    buttonTitle="Search"
                    onChange={this.onTermChange}
                />
                <FilterButtonGroup
                    title="Search by"
                    buttonTitles={["Title", "Genre"]}
                    selectedIndex={criteriaOrder.indexOf(state.searchBy)}
                    onClick={this.onButtonGroupClick}
                />
            </div>
        )
    }
}
