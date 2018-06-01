import React from 'react'
import { shallow, mount } from 'enzyme'
import IndexPage from '../index_page'

// This function is used to find containers in ShallowWrapper tree
const matchNode = (component, regex) => {
    const predicate = n => {
        const matches = n.name().match(regex) || []
        return matches.length > 0
    }
    return component.findWhere(predicate)
}

describe('IndexPage ', () => {

    let component

    beforeEach(() => {
        component = shallow(<IndexPage />)
    })

    // Keep commented out it for now, this will be useful for testing containers
    //    it('propagates term state to search panel', () => {
    //        const term = 'abcd'
    //        component.setState({ term })
    //
    //        const panel = component.find('SearchPanel')
    //        expect(panel.props().term).toEqual(term)
    //    })
    //
    //    it('propagates search scope by state to button group', () => {
    //        component.setState({ searchScope: buttonRecords[1].id })
    //
    //        const buttonGroup = component.find('ButtonGroup')
    //        expect(buttonGroup.props().selectedButtonId).toEqual(buttonRecords[1].id)
    //    })

    it('has header', () => {
        const child = component.find('Header')
        expect(child.exists()).toBe(true)
    })

    it('has footer', () => {
        const child = component.find('Footer')
        expect(child.exists()).toBe(true)
    })

    it('has status bar', () => {
        const child = matchNode(component, /SortingStatusBar/)
        expect(child.exists()).toBe(true)
    })

    it('has movie grid', () => {
        const child = matchNode(component, /MovieGrid/)
        expect(child.exists()).toBe(true)
    })

})
