import "babel-polyfill"

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import App from './app'
import setupStore from './setup_store'
import './styles/common.css'

const { store, persistor } = setupStore()

const root = document.getElementById('root')
const element =
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <App />
        </PersistGate>
    </Provider>

ReactDOM.render(element, root)

