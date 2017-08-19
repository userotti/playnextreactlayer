export default function reducer(state={
        height: 58,
        show: true
    }, action) {

        switch (action.type) {

            case "SET_INFO_BAR_HEIGHT":{
                return {
                    ...state,
                    height: action.payload,
                }
            }
        }

        return state
}
