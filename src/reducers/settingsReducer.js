export default function reducer(state={
        coinsGame: false,
        creditsGame: true,
        toggleSettings: [
          {
            id: 'balance',
            label: 'Show Balance',
            value: false,
            disabled: false,
          },
          {
            id: 'sound',
            label: 'Sounds',
            value: false,
            disabled: true,
          },
          {
            id: 'quickspin',
            label: 'Quick Spin',
            value: false,
            disabled: false,
          }
        ]
    }, action) {

        switch (action.type) {
            case "SET_COINS_GAME_SETTING":{
                return {
                    ...state,
                    coinsGame: action.payload,
                    creditsGame: !action.payload
                    }
            }

            case "SET_SHOW_BALANCE_VALUE":{
                return {
                    ...state,
                    toggleSettings: state.toggleSettings.map(
                         (content, i) => content.id === 'balance' ? {...content, value: action.payload}
                                                 : content)

                    }
            }

            case "SET_SHOW_BALANCE_BUTTON_DISABLED":{
                return {
                    ...state,
                    toggleSettings: state.toggleSettings.map(
                         (content, i) => content.id === 'balance' ? {...content, disabled: action.payload}
                                                 : content)

                    }
            }

            case "SET_SOUND_ACTIVE_VALUE":{
                return {
                    ...state,
                    toggleSettings: state.toggleSettings.map(
                         (content, i) => content.id === 'sound' ? {...content, value: action.payload}
                                                 : content)

                    }
            }

            case "SET_SOUND_ACTIVE_BUTTON_DISABLED":{
                return {
                    ...state,
                    toggleSettings: state.toggleSettings.map(
                         (content, i) => content.id === 'sound' ? {...content, disabled: action.payload}
                                                 : content)

                    }
            }

            case "SET_quickspin_VALUE":{
                return {
                    ...state,
                    toggleSettings: state.toggleSettings.map(
                         (content, i) => content.id === 'quickspin' ? {...content, value: action.payload}
                                                 : content)

                    }
            }

            case "SET_quickspin_BUTTON_DISABLED":{
                return {
                    ...state,
                    toggleSettings: state.toggleSettings.map(
                         (content, i) => content.id === 'quickspin' ? {...content, disabled: action.payload}
                                                 : content)

                    }
            }

        }

        return state

}
