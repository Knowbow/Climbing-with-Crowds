import {combineReducers} from 'redux';

import sessionReducer from './session_reducer';
import errorReducer from './error_reducer';
import eventsReducer from './events_reducer';
import usersReducer from './users_reducer';

export default combineReducers({
    session: sessionReducer,
    errors: errorReducer,
    events: eventsReducer,
   
    //entities: entityReducer,
});