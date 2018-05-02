//@flow

import React, { Component } from 'react'

const CRITERIA = {
    TITLE: "TITLE",
    GENER: "GENER"

}

type SearchBy = $Keys<typeof CRITERIA>

type ButtonStyles = {
    title: string,
    gener: string
}

type Props = {
}

type State = {
    term: string,
    searchBy: SearchBy
}

export default class SearchBar extends React.Component<Props, State> {
    onTermChange: (term: string) => void
    onTitleButtonClick: () => void
    onGenerButtonClick: () => void

    constructor(props: Props) {
        super(props)
        this.state = {
            term: '',
            searchBy: CRITERIA.TITLE
        }
        this.onTermChange = this.onTermChange.bind(this)
        this.onTitleButtonClick = this.onTitleButtonClick.bind(this)
        this.onGenerButtonClick = this.onGenerButtonClick.bind(this)
    }

    onTitleButtonClick() {
        this.setState({ searchBy: CRITERIA.TITLE })
    }

    onGenerButtonClick() {
        this.setState({ searchBy: CRITERIA.GENER })
    }

    onTermChange(term: string) {
        this.setState({ term })
    }

    buttonStyles(): ButtonStyles {
        let styles: ButtonStyles = {title: '', gener: ''}
        switch (this.state.searchBy) {
            case CRITERIA.TITLE:
                styles = {title: "btn btn-info", gener: "btn btn-outline-info"} 
                break;
            case CRITERIA.GENER:
                styles = {title: "btn btn-outline-info", gener: "btn btn-info"} 
                break;
        }
        return styles
    }

    render() {
        const state = this.state
        const styles = this.buttonStyles()

        console.log(styles)

        if (styles.gener === "btn btn-info") {
            throw new Error('moo')
        }

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
                    <button type="button" className={styles.title} onClick={this.onTitleButtonClick}>Title</button>
                    <button type="button" className={styles.gener} onClick={this.onGenerButtonClick}>Gener (throws Error)</button>
                </div>
            </div>
        )
    }
}
