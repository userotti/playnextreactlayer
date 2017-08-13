export default function reducer(state={
        dimentions: {
            width: window.innerWidth,
            height: window.innerHeight,
        },
        menuState: {
            menuOpen: false,
            openWidth: 300
        }
    }, action) {

        switch (action.type) {
            case "ON_RESIZE_EVENT":{
                return {
                    ...state,
                    dimentions: {
                        width: action.payload.width,
                        height: action.payload.height,
                    }}
            }

            case "SET_MENU_DRAWER_STATE_UISTATE":{
                return {
                    ...state,
                    menuState: {
                        ...state.menuState,
                        menuOpen: action.payload,
                    }}
            }
        }

        return state

}
