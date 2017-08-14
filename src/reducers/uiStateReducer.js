import { combineReducers } from 'redux';

import menuState from "./menuStateReducer"
import dimention from "./dimentionReducer"
import homeButtonState from "./homeButtonStateReducer"



export default combineReducers({
    menuState,
    dimention,
    homeButtonState
})
