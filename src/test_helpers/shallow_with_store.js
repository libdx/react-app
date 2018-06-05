import { shallow } from 'enzyme'

const shallowWithStore = (element, store) => {
    const context = { store }
    return shallow(element, { context })
}

export default shallowWithStore
