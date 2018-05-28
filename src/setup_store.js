import { createStore, applyMiddleware } from 'redux'
import ReduxPromise from 'redux-promise'
import createDebounce from 'redux-debounced';

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import reducer from './reducers'

const persistConfig = {
    key: 'root',
    storage
}

const persistedReducer = persistReducer(persistConfig, reducer)

const reduxDebounce = createDebounce()

export default () => {
    const store = createStore(
        persistedReducer,
        {},
        applyMiddleware(reduxDebounce, ReduxPromise)
    )
    const persistor = persistStore(store)
    return { store, persistor }
}

