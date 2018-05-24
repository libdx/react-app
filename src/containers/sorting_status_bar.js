//@flow
import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import StatusBar from '../components/status_bar'
import { sortMovies } from '../actions'

import type SortOrder from '../types/sort_order'
import { sortOrder } from '../types/sort_order'

type Props = {
    title: string,
    sortOrder?: SortOrder,
    onOptionClick: (key: SortOrder) => void
}

const sortOptions = [
    {id: 'RELEASE_DATE', title: 'release date'},
    {id: 'RATING', title: 'rating'}
]

const SortingStatusBar = ({ title, sortOrder, onOptionClick }: Props) => {
    return (
        <StatusBar
            title={title}
            options={sortOptions}
            activeOptionID={sortOrder}
            onOptionClick={onOptionClick}
        />
    )
}

const mapStateToProps = (state, ownProps) => ({
    ...ownProps,
    sortOrder: state.sortOrder
})

const mapDispatchToProps = dispatch => ({
    onOptionClick: (key: SortOrder) => dispatch(sortMovies(key))
})

export default connect(mapStateToProps, mapDispatchToProps)(SortingStatusBar)

