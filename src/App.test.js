import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import App from './App'

const mockStore = configureStore()

describe('React-Redux Components', () => {
    let store

    beforeEach(() => {
        store = mockStore({
            authReducer: {},
            donationReducer: {},
            settingsReducer: {},
            userReducer: {},
        })
    })

    it('renders without crashing', () => {

        const div = document.createElement('div')
        ReactDOM.render(<Provider store={store}><App /></Provider>, div)
        ReactDOM.unmountComponentAtNode(div)
    })
})

describe('Unit testing', () => {
    it('!(2 + 2 = 5)', () => {
        expect(2 + 2).not.toEqual(5)
    })
})
