import React from 'react'
import { shallow } from 'enzyme'
import Footer from '../footer'

import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })

describe('Footer', () => {

    const brand = 'Brand'
    let component

    beforeEach(() => {
        component = shallow(<Footer brand={brand} />)
    })

    it('has brand label', () => {
        const span = component.find('span') 

        expect(span.exists()).toBeTruthy()
    })
})
