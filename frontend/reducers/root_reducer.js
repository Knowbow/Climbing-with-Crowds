import {combineReducers} from 'redux';

import sessionReducer from './session_reducer';
import errorReducer from './error_reducer';

export default combineReducers({
    session: sessionReducer,
    error: errorReducer,
});