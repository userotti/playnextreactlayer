import gamesactive from '../../../assets/menu-icons/gamesactive.png';
import gamesdisabled from '../../../assets/menu-icons/gamesdisabled.png';
import gamespressed from '../../../assets/menu-icons/gamespressed.png';

import settingsactive from '../../../assets/menu-icons/settingsactive.png';
import settingsdisabled from '../../../assets/menu-icons/settingsdisabled.png';
import settingspressed from '../../../assets/menu-icons/settingspressed.png';

import paytableactive from '../../../assets/menu-icons/paytableactive.png';
import paytabledisabled from '../../../assets/menu-icons/paytabledisabled.png';
import paytablepressed from '../../../assets/menu-icons/paytablepressed.png';

import playforrealactive from '../../../assets/menu-icons/playforrealactive.png';
import playforrealdisabled from '../../../assets/menu-icons/playforrealdisabled.png';
import playforrealpressed from '../../../assets/menu-icons/playforrealpressed.png';


export default function reducer(state={
        menuOpen: false,
        showMenuButton: true,
        openWidth: 250,
        menuItems: [
            {
                label: 'Games',
                onTapActionType: 'GOTO_GAMES_FROM_MENU',
                onTapActionPayload: true,
                activeIconURL: gamesactive,
                disabledIconURL: gamesdisabled,
                rolloverIconURL: gamespressed,


            },
            {
                label: 'Settings',
                onTapActionType: 'TOGGLE_SETTING_SCENE_VISIBLE',
                onTapActionPayload: true,
                activeIconURL: settingsactive,
                disabledIconURL: settingsdisabled,
                rolloverIconURL: settingspressed,

            },
            {
                label: 'Paytable',
                onTapActionType: 'OPEN_PAYTABLE_SCENE',
                onTapActionPayload: true,
                activeIconURL: paytableactive,
                disabledIconURL: paytabledisabled,
                rolloverIconURL: paytablepressed,

            },
            {
                label: 'Play For Real',
                onTapActionType: 'GOTO_PLAY_FOR_REAL_FROM_MENU',
                onTapActionPayload: true,
                activeIconURL: playforrealactive,
                disabledIconURL: playforrealdisabled,
                rolloverIconURL: playforrealpressed,

            },
        ]
    }, action) {

        switch (action.type) {

            case "SET_MENU_DRAWER_STATE":{
                return {
                    ...state,
                    menuOpen: action.payload
                }
            }

            case "TOGGLE_MENU_AND_HIDE_BUTTONS":{
                return {
                    ...state,
                    menuOpen: action.payload,
                    showMenuButton: !action.payload
                }
            }



        }

        return state
}
