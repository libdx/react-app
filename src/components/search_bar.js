//@flow

import React, { Component } from 'react'

type Props = {
}

type State = {
    term: string
}

export default class SearchBar extends Component<Props, State> {
    onTermChange: (term: string) => void

    constructor(props: Props) {
        super(props)
        this.state = {
            term: ''
        }
        this.onTermChange = this.onTermChange.bind(this)
    }

    onTermChange(term: string) {
        this.setState({ term })
    }

    render() {
        return (
            <div className="input-group mb-3">
                <input 
                    value={this.state.term}
                    type="text"
                    className="form-control"
                    placeholder="Search"
                    onChange={event => this.onTermChange(event.target.value)}
                />
                <div className="input-group-append">
                    <button className="btn btn-outline-secondary" type="button">Search</button>
                </div>
            </div>
        )
    }
}
