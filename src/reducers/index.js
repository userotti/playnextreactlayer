import { combineReducers } from 'redux';

import tweets from "./tweetsReducer"
import user from "./userReducer"

import uiState from "./uiStateReducer"



export default combineReducers({
    uiState
})
