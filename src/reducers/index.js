import { combineReducers } from 'redux'
import authReducer from './auth'
import donationReducer from './donation'
import donationsReducer from './donations'
import settingsReducer from './settings'
import userReducer from './user'

export default combineReducers({
    authReducer,
    donationReducer,
    donationsReducer,
    settingsReducer,
    userReducer
})
