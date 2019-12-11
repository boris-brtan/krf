import { call, put, takeLatest, all } from 'redux-saga/effects'
import { push } from 'react-router-redux'
import api from './api'
import {
    AUTH_ACTIVATE_REQUESTED, AUTH_ACTIVATE_SUCCEEDED, AUTH_ACTIVATE_FAILED,
    AUTH_LOGIN_REQUESTED, AUTH_LOGIN_SUCCEEDED, AUTH_LOGIN_FAILED,
    AUTH_TOKEN_EXPIRED,
    USER_HOME_REQUESTED, USER_HOME_SUCCEEDED, USER_HOME_FAILED,
    USER_CARD_REQUESTED, USER_CARD_SUCCEEDED, USER_CARD_FAILED,
    USER_DONATIONS_REQUESTED, USER_DONATIONS_SUCCEEDED, USER_DONATIONS_FAILED,
    USER_DONATION_REQUESTED, USER_DONATION_SUCCEEDED, USER_DONATION_FAILED,
    USER_DONATION_RESULT_REQUESTED, USER_DONATION_RESULT_SUCCEEDED, USER_DONATION_RESULT_FAILED,
    USER_DONATION_PARAM_REQUESTED, USER_DONATION_PARAM_SUCCEEDED, USER_DONATION_PARAM_FAILED,
    SETTINGS_PARAMS_REQUESTED, SETTINGS_PARAMS_SUCCEEDED, SETTINGS_PARAMS_FAILED,
} from './actions'

function* authActivate(action) {
    try {
        const user = action.payload
        const payload = yield call(api.auth.activate, user)

        yield put({ type: AUTH_ACTIVATE_SUCCEEDED, payload })
    } catch ({ message }) {
        yield put({ type: AUTH_ACTIVATE_FAILED, message })
    }
}

function* authLogin(action) {
    try {
        const { user, pass } = action.payload
        const payload = yield call(api.auth.login, user, pass)

        yield put({ type: AUTH_LOGIN_SUCCEEDED, payload })
    } catch ({ message }) {
        yield put({ type: AUTH_LOGIN_FAILED, message })
    }
}

function* userHome(action) {
    try {
        const token = action.payload
        const payload = yield call(api.user.home, token)

        yield put({ type: USER_HOME_SUCCEEDED, payload })
    } catch ({ message }) {
        yield put({ type: USER_HOME_FAILED, message })
    }
}

function* userCard(action) {
    try {
        const token = action.payload
        const payload = yield call(api.user.card, token)

        yield put({ type: USER_CARD_SUCCEEDED, payload })
    } catch ({ message }) {
        yield put({ type: USER_CARD_FAILED, message })
    }
}

function* userDonations(action) {
    try {
        const token = action.payload
        const payload = yield call(api.user.donations, token)

        yield put({ type: USER_DONATIONS_SUCCEEDED, payload })
    } catch ({ message }) {
        yield put({ type: USER_DONATIONS_FAILED, message })
        yield put({ type: AUTH_TOKEN_EXPIRED })
    }
}

function* userDonation(action) {
    try {
        const { token, id } = action.payload
        const payload = yield call(api.user.donation, token, id)

        yield put({ type: USER_DONATION_SUCCEEDED, payload })
        yield put({ type: USER_DONATION_RESULT_REQUESTED, payload: action.payload })
        yield put(push('/donation/' + id))
    } catch ({ message }) {
        yield put({ type: USER_DONATION_FAILED, message })
        yield put({ type: AUTH_TOKEN_EXPIRED })
    }
}

function* userDonationResult(action) {
    try {
        const { token, id } = action.payload
        const payload = yield call(api.user.donationResult, token, id)

        yield put({ type: USER_DONATION_RESULT_SUCCEEDED, payload })
    } catch ({ message }) {
        yield put({ type: USER_DONATION_RESULT_FAILED, message })
        yield put({ type: AUTH_TOKEN_EXPIRED })
    }
}

function* userDonationResultParam(action) {
    try {
        const { token, id, paramId } = action.payload
        const payload = yield call(api.user.donationResultParam, token, id, paramId)

        yield put({ type: USER_DONATION_PARAM_SUCCEEDED, payload })
    } catch ({ message }) {
        yield put({ type: USER_DONATION_PARAM_FAILED, message })
        yield put({ type: AUTH_TOKEN_EXPIRED })
    }
}

function* settingsParams(action) {
    try {
        const token = action.payload
        const payload = yield call(api.settings.params, token)

        yield put({ type: SETTINGS_PARAMS_SUCCEEDED, payload })
    } catch ({ message }) {
        yield put({ type: SETTINGS_PARAMS_FAILED, message })
        yield put({ type: AUTH_TOKEN_EXPIRED })
    }
}

export default function* () {
    yield all([
        yield takeLatest(AUTH_ACTIVATE_REQUESTED, authActivate),
        yield takeLatest(AUTH_LOGIN_REQUESTED, authLogin),
        yield takeLatest(USER_HOME_REQUESTED, userHome),
        yield takeLatest(USER_CARD_REQUESTED, userCard),
        yield takeLatest(USER_DONATIONS_REQUESTED, userDonations),
        yield takeLatest(USER_DONATION_REQUESTED, userDonation),
        yield takeLatest(USER_DONATION_RESULT_REQUESTED, userDonationResult),
        yield takeLatest(USER_DONATION_PARAM_REQUESTED, userDonationResultParam),
        yield takeLatest(SETTINGS_PARAMS_REQUESTED, settingsParams),
    ])
}
