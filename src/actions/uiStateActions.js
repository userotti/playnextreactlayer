export function toggleMenu() {
    return {
        type: 'ON_MENU_TOGGLE',
    }
}

export function setMenuDrawerState(open) {
    return {
        type: 'SET_MENU_DRAWER_STATE',
        payload: open
    }
}

export function gotoHome() {
    return {
        type: 'GOTO_HOME',
    }
}

export function setHomeButtonVisibility(show) {
    return {
        type: 'SET_HOME_BUTTON_VISIBILITY',
        payload: show
    }
}

export function setMenuButtonVisibility(show) {
    return {
        type: 'SET_HOME_BUTTON_VISIBILITY',
        payload: show
    }
}

export function toggleMenuAndHideButtons(showMenu) {
    return {
        type: 'TOGGLE_MENU_AND_HIDE_BUTTONS',
        payload: showMenu
    }
}

export function toggleSettingsSceneVisibility(payload) {
    return {
        type: 'TOGGLE_SETTING_SCENE_VISIBLE',
        payload: payload
    }
}

export function togglePaytableSceneVisibility(payload) {
    return {
        type: 'TOGGLE_PAYTABLE_SCENE_VISIBLE',
        payload: payload
    }
}

export function menuItemTapped(menuItemActionType, payload) {
    return {
        type: menuItemActionType,
        payload: payload
    }
}
