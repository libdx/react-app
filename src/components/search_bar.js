//@flow

import React, { Component } from 'react'

type Props = {
}

type State = {
}

export default class SearchBar extends Component<Props, State> {
    render() {
        return (
            <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Search" />
                <div className="input-group-append">
                    <button className="btn btn-outline-secondary" type="button">Search</button>
                </div>
            </div>
        )
    }
}
