import "babel-polyfill"

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { BrowserRouter as Router } from 'react-router-dom'

import App from './app'
import setupStore from './setup_store'
import './styles/common.css'

const preloadedState = window.__PRELOADED_STATE__

delete window.__PRELOADED_STATE__

const { store, persistor } = setupStore(preloadedState)

const root = document.getElementById('root')

const element =
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>

ReactDOM.hydrate(element, root)

