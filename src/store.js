import { applyMiddleware, createStore } from 'redux';
import promise from 'redux-promise-middleware';
import thunk from 'redux-thunk'
import createLogger from 'redux-logger';

const logger = createLogger({
    //empty options
});

import reducer from "./reducers";
const middleware = applyMiddleware(  promise(),  thunk, logger );
export default createStore(reducer, middleware);
