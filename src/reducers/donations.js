import {
    USER_DONATIONS_SUCCEEDED, USER_DONATIONS_FAILED,
} from '../actions'

const initialState = []

export const donationReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_DONATIONS_SUCCEEDED:
            return action.payload
        case USER_DONATIONS_FAILED:
            return initialState
        default:
            return state
    }
}

export default donationReducer
