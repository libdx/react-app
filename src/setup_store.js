import { createStore, applyMiddleware } from 'redux'
import promise from 'redux-promise'
import createDebounce from 'redux-debounced'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import reducer from './reducers'

const debounce = createDebounce()

export default (initialState = {}) => {
    const store = createStore(
        reducer,
        initialState,
        applyMiddleware(debounce, thunk, promise, logger)
    )
    return { store, persistor: {} }
}

