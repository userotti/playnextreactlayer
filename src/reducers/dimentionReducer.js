export default function reducer(state={
        width: window.innerWidth,
        height: window.innerHeight,
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
        }

        return state
}
