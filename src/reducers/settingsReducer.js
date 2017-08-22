export default function reducer(state={
        coinsGame: false,
        creditsGame: true,
        showBalance: true,
        soundsActive: true,
        quickSpinActive: false
    }, action) {

        switch (action.type) {
            case "SET_COINS_GAME_SETTING":{
                return {
                    ...state,
                    coinsGame: action.payload,
                    creditsGame: !action.payload
                    }
            }

            case "SET_SHOW_BALANCE":{
                return {
                    ...state,
                    showBalance: action.payload

                    }
            }

            case "SET_SOUNDS_ACTIVE":{
                return {
                    ...state,
                    soundsActive: action.payload

                    }
            }
            case "SET_QUICKSPIN_ACTIVE":{
                return {
                    ...state,
                    quickSpinActive: action.payload

                    }
            }

        }

        return state

}
