export function selectCoinsGame(payload) {
    return {
        type: 'SET_COINS_GAME_SETTING',
        payload: payload
    }
}

export function setShowBalance(payload) {
    return {
        type: 'SET_SHOW_BALANCE',
        payload: payload
    }
}

export function setSoundsActive(payload) {
    return {
        type: 'SET_SOUNDS_ACTIVE',
        payload: payload
    }
}

export function setQuickspinActive(payload) {
    return {
        type: 'SET_QUICKSPIN_ACTIVE',
        payload: payload
    }
}
