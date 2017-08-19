import { combineReducers } from 'redux';

import menuState from "./menuStateReducer"
import dimensions from "./dimensionsReducer"
import homeButtonState from "./homeButtonStateReducer"
import settingsSceneState from "./settingsSceneStateReducer"
import paytableState from "./paytableStateReducer"
import infoBarState from "./infoBarStateReducer"


export default combineReducers({
    menuState,
    dimensions,
    homeButtonState,
    settingsSceneState,
    paytableState,
    infoBarState
})
