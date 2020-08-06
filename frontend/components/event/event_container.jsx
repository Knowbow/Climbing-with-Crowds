import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter, Redirect } from 'react-router-dom';
import { requestEvent } from '../../actions/event_actions';
import Event from './event';


const mstp = (state, ownProps) => {
    return ({
        thisEvent: state.events[ownProps.match.params.eventId],
        currentUser: state.session.currentUser,
    })
}

const mdtp = dispatch => {
    return ({
        requestEvent: (id) => dispatch(requestEvent(id))
    })
}
export default connect(mstp, mdtp)(Event);