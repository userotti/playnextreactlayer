export function toggleMenu() {
    return {
        type: 'ON_MENU_TOGGLE',
    }
}

export function setMenuDrawerState(open) {
    return {
        type: 'SET_MENU_DRAWER_STATE_UISTATE',
        payload: open
    }
}

export function gotoHome() {
    return {
        type: 'SET_MENU_DRAWER_STATE_UISTATE',
    }
}

export function setHomeButtonVisibility(show) {
    return {
        type: 'SET_HOME_BUTTON_VISIBILITY',
        payload: show
    }
}
