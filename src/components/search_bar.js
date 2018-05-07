//@flow

import React, { Component } from 'react'
import Button from './button'

const criteria = {
    TITLE: "TITLE",
    GENRE: "GENRE"

}

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

    constructor(props: Props) {
        super(props)
        this.state = {
            term: '',
            searchBy: criteria.TITLE
        }
        this.onTermChange = this.onTermChange.bind(this)
        this.onTitleButtonClick = this.onTitleButtonClick.bind(this)
        this.onGenerButtonClick = this.onGenerButtonClick.bind(this)
    }

    onTitleButtonClick() {
        this.setState({ searchBy: criteria.TITLE })
    }

    onGenerButtonClick() {
        this.setState({ searchBy: criteria.GENRE })
    }

    onTermChange(term: string) {
        this.setState({ term })
    }

    render() {
        const state = this.state

        return (
            <div className="search-bar">
                <div className="input-group mb-3">
                    <input 
                        value={state.term}
                        type="text"
                        className="form-control"
                        placeholder="Search"
                        onChange={event => this.onTermChange(event.target.value)}
                    />
                    <div className="input-group-append">
                        <button className="btn btn-outline-secondary" type="button">Search</button>
                    </div>
                </div>
                <div className="button-group">
                    <span>Search by</span>
                    <Button title="Title" selected={state.searchBy == criteria.TITLE} onClick={this.onTitleButtonClick} />
                    <Button title="Genre" selected={state.searchBy == criteria.GENRE} onClick={this.onGenerButtonClick} />
                </div>
            </div>
        )
    }
}
