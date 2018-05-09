import React from 'react'
import { shallow } from 'enzyme'
import Footer from '../footer'

describe('Footer', () => {

    const brand = 'Brand'
    let component

    beforeEach(() => {
        component = shallow(<Footer brand={brand} />)
    })

    it('has brand label', () => {
        const span = component.find('span') 

        expect(span.exists()).toBe(true)
    })
})
