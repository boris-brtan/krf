import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'

import { createBrowserHistory, createHashHistory } from 'history'
import { Router } from 'react-router-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { routerMiddleware } from 'react-router-redux'
import createSagaMiddleware from 'redux-saga'

import rootSaga from './sagas'
import rootReducer from './reducers'

const history = process.env.PUBLIC_URL.search(/krf/) === -1 ? createBrowserHistory() : createHashHistory()
const sagaMiddleware = createSagaMiddleware()

const store = createStore(
    rootReducer,
    JSON.parse(localStorage.state || "{}"),
    applyMiddleware(
        sagaMiddleware,
        routerMiddleware(history)
    )
)
sagaMiddleware.run(rootSaga)

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <App />
        </Router>
    </Provider>,
    document.getElementById('root')
)

window.onbeforeunload = () => {
    localStorage.state = JSON.stringify(store.getState())
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register()
