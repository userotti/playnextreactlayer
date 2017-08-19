export default function reducer(state={
        show: false,
    }, action) {

        switch (action.type) {
            case 'TOGGLE_SETTING_SCENE_VISIBLE':{
                return {
                    ...state,
                    show: action.payload,
                }
            }
        }

        return state
}
