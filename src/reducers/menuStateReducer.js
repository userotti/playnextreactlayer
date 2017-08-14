export default function reducer(state={
        menuOpen: false,
        openWidth: 300,

    }, action) {

        switch (action.type) {
            case "SET_MENU_DRAWER_STATE_UISTATE":{
                return {
                    ...state,
                    menuOpen: action.payload
                }
            }

        }

        return state
}
