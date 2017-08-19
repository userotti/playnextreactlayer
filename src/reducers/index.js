import { combineReducers } from 'redux';

import uiState from "./UiStateReducer"
import betModel from "./betModelReducer"


export default combineReducers({
    uiState,
    betModel
})
