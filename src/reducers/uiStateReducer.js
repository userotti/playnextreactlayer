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

            case "ON_MENU_TOGGLE":{
                return {
                    ...state,
                    menuState: {
                        ...state.menuState,
                        menuOpen: !state.menuState.menuOpen,
                    }}
            }

            case "SET_MENU_STATE":{
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
