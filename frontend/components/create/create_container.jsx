import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter, Redirect } from 'react-router-dom';
import { createEvent } from '../../actions/event_actions';
import CreateEvent from './create_event';


const mstp = (state, ownProps) => {
    return ({
        thisEvent: state.events[ownProps.match.params.eventId],
        currentUser: state.session.currentUser,
    })
}

const mdtp = dispatch => {
    return ({
        createEvent: (formEvent) => dispatch(createEvent(formEvent))
    })
}
export default connect(mstp, mdtp)(CreateEvent);