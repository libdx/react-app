import { createStore, applyMiddleware } from 'redux'
import promise from 'redux-promise'
import createDebounce from 'redux-debounced'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import reducer from './reducers'

const persistConfig = {
    key: 'root',
    storage
}

const persistedReducer = persistReducer(persistConfig, reducer)

const debounce = createDebounce()

export default () => {
    const store = createStore(
        persistedReducer,
        {},
        applyMiddleware(debounce, thunk, promise, logger)
    )
    const persistor = persistStore(store)
    return { store, persistor }
}

