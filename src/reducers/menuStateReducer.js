
export default function reducer(state={
        menuOpen: false,
        showMenuButton: true,
        openWidth: 300,
        menuItems: [
            {
                label: 'Games',
                onTapAction: 'gotoGames',
            },
            {
                label: 'Settings',
                onTapAction: 'gotoGames',
            },
            {
                label: 'Paytable',
                onTapAction: 'gotoGames',
            },
            {
                label: 'Play For Real',
                onTapAction: 'gotoGames',
            },
        ]
    }, action) {

        switch (action.type) {

            case "SET_MENU_DRAWER_STATE":{
                return {
                    ...state,
                    menuOpen: action.payload
                }
            }

            case "TOGGLE_MENU_AND_HIDE_BUTTONS":{
                return {
                    ...state,
                    menuOpen: action.payload,
                    showMenuButton: !action.payload
                }
            }



        }

        return state
}
