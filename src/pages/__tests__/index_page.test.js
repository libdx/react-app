import React from 'react'
import { shallow, mount } from 'enzyme'
import IndexPage, { searchScope, buttonRecords } from '../index_page'

describe('IndexPage ', () => {

    let component

    beforeEach(() => {
        component = shallow(<IndexPage />)
    })

    it('propagates term state to search panel', () => {
        const term = 'abcd'
        component.setState({ term })

        const panel = component.find('SearchPanel')
        expect(panel.props().term).toEqual(term)
    })

    it('propagates search scope by state to button group', () => {
        component.setState({ searchBy: buttonRecords[1].id })

        const buttonGroup = component.find('ButtonGroup')
        expect(buttonGroup.props().selectedButtonId).toEqual(buttonRecords[1].id)
    })
})
