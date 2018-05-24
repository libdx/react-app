//@flow
import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import StatusBar from '../components/status_bar'

import type SortOrder from '../types/sort_order'
import { sortOrder } from '../types/sort_order'

type Props = {
    title: string,
    sortOrder?: SortOrder
}

const sortOptions = [
    {id: 'RELEASE_DATE', title: 'release date'},
    {id: 'RATING', title: 'rating'}
]

const SortingStatusBar = ({ title, sortOrder='RELEASE_DATE' }: Props) => {
    return (
        <StatusBar
            title={title}
            options={sortOptions}
            activeOptionID={sortOrder}
            onOptionClick={ id => console.log(id) }
        />
    )
}

const mapStateToProps = (status, ownProps) => ({
    ...ownProps
})

const mapDispatchToProps = dispatch => ({
})

export default connect(mapStateToProps)(SortingStatusBar)

