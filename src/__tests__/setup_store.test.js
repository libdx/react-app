import setupStore from '../setup_store'

describe('setupStore', () => {
    it('creates store and persistor', () => {
        const { store, persistor } = setupStore()
        expect(store).not.toBeNull()
        expect(store).not.toBeUndefined()
        expect(persistor).not.toBeNull()
        expect(persistor).not.toBeUndefined()
    })
})
