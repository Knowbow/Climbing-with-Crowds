import {combineReducers} from 'redux';

import sessionReducer from './session_reducer';
import errorReducer from './error_reducer';
//import entityReducer from './entities_reducer'

export default combineReducers({
    session: sessionReducer,
    errors: errorReducer,
    //entities: entityReducer,
});