import React from 'react'
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
})
