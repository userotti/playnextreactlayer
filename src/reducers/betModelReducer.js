export default function reducer(state={
        betAmount: 50,
        coinSize: 5
    }, action) {

        switch (action.type) {
            case "SET_BET_AMOUNT_BETMODEL":{
                return {
                    ...state,
                    betAmount: action.payload.betAmount
                    }
            }

        }

        return state

}
