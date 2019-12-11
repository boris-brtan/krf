import {
    AUTH_ACTIVATE_SUCCEEDED, AUTH_ACTIVATE_FAILED, AUTH_ACTIVATE_ENABLED,
    AUTH_LOGIN_REQUESTED, AUTH_LOGIN_SUCCEEDED, AUTH_LOGIN_FAILED,
    AUTH_TOKEN_EXPIRED, AUTH_CLEAR,
} from '../actions'

const initialState = {
    user: null,
    token: null,
    activated: false,
    pass: null,
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case AUTH_ACTIVATE_SUCCEEDED:
        case AUTH_ACTIVATE_ENABLED:
            return {
                ...state,
                user: action.payload,
                activated: true,
            }
        case AUTH_ACTIVATE_FAILED:
            return {
                ...state,
                user: null,
                activated: false
            }
        case AUTH_LOGIN_REQUESTED:
            return {
                ...state,
                pass: action.payload.pass
            }
        case AUTH_LOGIN_SUCCEEDED:
            return {
                ...state,
                token: action.payload,
            }
        case AUTH_LOGIN_FAILED:
            return {
                ...state,
                token: null,
                pass: null,
            }
        case AUTH_TOKEN_EXPIRED:
            return {
                ...state,
                token: null,
            }
        case AUTH_CLEAR:
            return initialState
        default:
            return state
    }
}

export default authReducer
