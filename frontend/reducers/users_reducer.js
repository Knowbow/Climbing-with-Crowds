import merge from 'lodash/merge';

import { RECEIVE_CURRENT_USER } from '../actions/session';

const usersReducer = (state = {}, action ) => {
  Object.freeze(state);
  let newState;
  let userId;
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, state, { [action.currentUser.id]: action.currentUser });
    case REMOVE_ATTENDEE:
      newState = state;
      userId = Object.keys(newState);
      newState[userId[0]].events = action.attendee.events;
      return newState;
    case REMOVE_EVENT:
      newState = state;
      userId = Object.keys(newState);
      newState[userId[0]].hosted_events = action.event.hosted_events;
    default:
      return state;
  }
};

export default usersReducer;