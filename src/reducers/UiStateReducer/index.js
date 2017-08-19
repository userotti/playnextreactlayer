import { combineReducers } from 'redux';

import menuState from "./menuStateReducer"
import dimentions from "./dimentionsReducer"
import homeButtonState from "./homeButtonStateReducer"
import settingsSceneState from "./settingsSceneStateReducer"
import paytableState from "./paytableStateReducer"



export default combineReducers({
    menuState,
    dimentions,
    homeButtonState,
    settingsSceneState,
    paytableState,

})
