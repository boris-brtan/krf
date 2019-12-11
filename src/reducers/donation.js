import {
    USER_DONATION_SUCCEEDED, USER_DONATION_FAILED,
    USER_DONATION_RESULT_SUCCEEDED, USER_DONATION_RESULT_FAILED,
    USER_DONATION_PARAM_SUCCEEDED, USER_DONATION_PARAM_FAILED,
} from '../actions'

const initialState = {
    info: {}
}

const initialResultState = {
    result: []
}

const initialParamState = {
    param: []
}

export const donationReducer = (state = {
    ...initialState,
    ...initialParamState,
    ...initialResultState,
}, action) => {
    switch (action.type) {
        case USER_DONATION_SUCCEEDED:
            return {
                ...state,
                info: action.payload
            }
        case USER_DONATION_FAILED:
            return {
                ...state,
                ...initialState
            }
        case USER_DONATION_RESULT_SUCCEEDED:
            return {
                ...state,
                result: action.payload
            }
        case USER_DONATION_RESULT_FAILED:
            return {
                ...state,
                ...initialResultState
            }
        case USER_DONATION_PARAM_SUCCEEDED:
            return {
                ...state,
                param: action.payload
            }
        case USER_DONATION_PARAM_FAILED:
            return {
                ...state,
                ...initialParamState
            }
        default:
            return state
    }
}

export default donationReducer
