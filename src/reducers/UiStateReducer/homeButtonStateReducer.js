export default function reducer(state={
        show: true,
    }, action) {

        switch (action.type) {


            case "SET_HOME_BUTTON_VISIBILITY":{
                return {
                    ...state,
                    show: action.payload
                }
            }

            // case "TOGGLE_MENU_AND_HIDE_BUTTONS":{
            //     return {
            //         ...state,
            //         show: !action.payload,
            //     }
            // }
        }

        return state
}
