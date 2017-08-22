export function selectCoinsGame(payload) {
    return {
        type: 'SET_COINS_GAME_SETTING',
        payload: payload
    }
}

export function setSettingToggleValue(payload) {
    return {
        type: 'SET_SETTINGS_TOGGLE_VALUE',
        payload: payload
    }
}


export function setShowBalance(payload) {
    return {
        type: 'SET_SHOW_BALANCE_VALUE',
        payload: payload
    }
}

export function setSoundsActive(payload) {
    return {
        type: 'SET_SOUND_ACTIVE_VALUE',
        payload: payload
    }
}

export function setQuickspinActive(payload) {
    return {
        type: 'SET_QUICKSPIN_VALUE',
        payload: payload
    }
}
