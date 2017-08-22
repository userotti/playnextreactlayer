import { combineReducers } from 'redux';

import uiState from "./UiStateReducer"
import betModel from "./betModelReducer"
import settings from "./settingsReducer"

export default combineReducers({
    uiState,
    betModel,
    settings
})
