import {
    USER_HOME_SUCCEEDED, USER_HOME_FAILED,
    USER_CARD_SUCCEEDED, USER_CARD_FAILED,
} from '../actions'

const initialStateHome = {
    TerminNasledOdberu: null,
    KrvnaSkupina: null,
    Fenotyp: null,
    FenotypAsString: null,
    Pohlavie: null,
}

const initialStateCard = {
    Meno: null,
    Priezvisko: null,
    RodneCislo: null,
    DomovskePracovisko: null,
    PocetOdberov: null,
    KrvnaSkupinaPopis: null,
    FenotypAsText: null,
    Poistovna: null,
    KrvnaSkupinaZaklad: null,
}

export const userReducer = (state = { ...initialStateHome, ...initialStateCard, }, action) => {
    switch (action.type) {
        case USER_HOME_SUCCEEDED:
            return {
                ...state,
                ...action.payload
            }
        case USER_HOME_FAILED:
            return {
                ...state,
                ...initialStateHome
            }
        case USER_CARD_SUCCEEDED:
            return {
                ...state,
                ...action.payload
            }
        case USER_CARD_FAILED:
            return {
                ...state,
                ...initialStateCard
            }
        default:
            return state
    }
}

export default userReducer
