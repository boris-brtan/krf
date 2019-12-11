export const AUTH_ACTIVATE_REQUESTED = 'AUTH_ACTIVATE_REQUESTED'
export const AUTH_ACTIVATE_SUCCEEDED = 'AUTH_ACTIVATE_SUCCEEDED'
export const AUTH_ACTIVATE_FAILED = 'AUTH_ACTIVATE_FAILED'
export const AUTH_ACTIVATE_ENABLED = 'AUTH_ACTIVATE_ENABLE'

export const AUTH_LOGIN_REQUESTED = 'AUTH_LOGIN_REQUESTED'
export const AUTH_LOGIN_SUCCEEDED = 'AUTH_LOGIN_SUCCEEDED'
export const AUTH_LOGIN_FAILED = 'AUTH_LOGIN_FAILED'

export const AUTH_TOKEN_EXPIRED = 'AUTH_TOKEN_EXPIRED'
export const AUTH_CLEAR = 'AUTH_CLEAR'

export const USER_HOME_REQUESTED = 'USER_HOME_REQUESTED'
export const USER_HOME_SUCCEEDED = 'USER_HOME_SUCCEEDED'
export const USER_HOME_FAILED = 'USER_HOME_FAILED'

export const USER_CARD_REQUESTED = 'USER_CARD_REQUESTED'
export const USER_CARD_SUCCEEDED = 'USER_CARD_SUCCEEDED'
export const USER_CARD_FAILED = 'USER_CARD_FAILED'

export const USER_DONATIONS_REQUESTED = 'USER_DONATIONS_REQUESTED'
export const USER_DONATIONS_SUCCEEDED = 'USER_DONATIONS_SUCCEEDED'
export const USER_DONATIONS_FAILED = 'USER_DONATIONS_FAILED'

export const USER_DONATION_REQUESTED = 'USER_DONATION_REQUESTED'
export const USER_DONATION_SUCCEEDED = 'USER_DONATION_SUCCEEDED'
export const USER_DONATION_FAILED = 'USER_DONATION_FAILED'

export const USER_DONATION_RESULT_REQUESTED = 'USER_DONATION_RESULT_REQUESTED'
export const USER_DONATION_RESULT_SUCCEEDED = 'USER_DONATION_RESULT_SUCCEEDED'
export const USER_DONATION_RESULT_FAILED = 'USER_DONATION_RESULT_FAILED'

export const USER_DONATION_PARAM_REQUESTED = 'USER_DONATION_PARAM_REQUESTED'
export const USER_DONATION_PARAM_SUCCEEDED = 'USER_DONATION_PARAM_SUCCEEDED'
export const USER_DONATION_PARAM_FAILED = 'USER_DONATION_PARAM_FAILED'

export const SETTINGS_PARAMS_REQUESTED = 'SETTINGS_PARAMS_REQUESTED'
export const SETTINGS_PARAMS_SUCCEEDED = 'SETTINGS_PARAMS_SUCCEEDED'
export const SETTINGS_PARAMS_FAILED = 'SETTINGS_PARAMS_FAILED'

export const auth_activate = (user) => ({ type: AUTH_ACTIVATE_REQUESTED, payload: user })
export const auth_activate_enable = (user) => ({ type: AUTH_ACTIVATE_ENABLED, payload: user })
export const auth_login = (user, pass) => ({ type: AUTH_LOGIN_REQUESTED, payload: { user, pass } })
export const auth_clear = () => ({ type: AUTH_CLEAR })

export const user_home = (token) => ({ type: USER_HOME_REQUESTED, payload: token })
export const user_card = (token) => ({ type: USER_CARD_REQUESTED, payload: token })
export const user_donations = (token) => ({ type: USER_DONATIONS_REQUESTED, payload: token })
export const user_donation = (token, id) => ({ type: USER_DONATION_REQUESTED, payload: { token, id } })
export const user_donationResult = (token, id) => ({ type: USER_DONATION_RESULT_REQUESTED, payload: { token, id } })
export const user_donationResultParam = (token, id, paramId) => ({
    type: USER_DONATION_PARAM_REQUESTED,
    payload: { token, id, paramId }
})

export const settings_params = (token) => ({ type: SETTINGS_PARAMS_REQUESTED, payload: token })
