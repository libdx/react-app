import React from 'react'
import { shallow } from 'enzyme'
import Button, { INFO, SECONDARY }  from '../button'

describe('Button', () => {

    const record = {id: '42', title: "A", selected: false, kind: INFO }

    const component = (
        <Button
            id={record.id}
            title={record.title}
            selected={record.selected}
            kind={record.kind}
        />
    )

    let wrapper

    beforeEach(() => {
        wrapper = shallow(component)
    })

    it('has correct title', () => {
        expect(wrapper.text()).toEqual(record.title)
    })
})
