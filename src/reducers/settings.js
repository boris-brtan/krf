import {
    SETTINGS_PARAMS_SUCCEEDED, SETTINGS_PARAMS_FAILED,
} from '../actions'

const initialState = { 
    params: [] 
}

const settingsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SETTINGS_PARAMS_SUCCEEDED:
            return {
                ...state,
                params: action.payload
            }
        case SETTINGS_PARAMS_FAILED:
            return {
                ...state,
                ...initialState
            }
        default:
            return state
    }
}

export default settingsReducer
