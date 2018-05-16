import React from 'react'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'
import Header from '../header'

describe('Header', () => {

    const brand = 'Brand'
    let component

    beforeEach(() => {
        component = shallow(<Header brand={brand} />)
    })

    it('has brand label', () => {
        const label = component.find('.brand-label') 

        expect(label.exists()).toBe(true)
    })

    it('renders correctly', () => {
        const tree = renderer.create(<Header brand={brand} />).toJSON()
        expect(tree).toMatchSnapshot()
    })
})
