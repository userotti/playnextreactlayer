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

export function paytableSceneSuccessfullyOpened(payload){
    return {
        type: 'PAYTABLE_SUCCESSFULLY_OPENED',
        payload: payload
    }
}

export function closePaytableScene(payload){
    return {
        type: 'CLOSE_PAYTABLE_SCENE',
        payload: payload
    }
}

export function movePaytableIndex(payload) {
    return {
        type: 'SET_PAYTABLE_POSITION_INDEX',
        payload: payload
    }
}

export function hidePaytableItems(payload) {
    return {
        type: 'HIDE_PAYTABLE_ITEMS',
        payload: payload
    }
}
