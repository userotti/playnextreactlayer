import { combineReducers } from 'redux';

import uiState from "./uiStateReducer"
import betModel from "./betModelReducer"



export default combineReducers({
    uiState,
    betModel
})
