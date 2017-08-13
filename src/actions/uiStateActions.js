export function toggleMenu() {
    return {
        type: 'ON_MENU_TOGGLE',
    }
}

export function setMenuState(open) {
    return {
        type: 'SET_MENU_STATE',
        payload: open
    }
}
