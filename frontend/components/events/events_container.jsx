import React from 'react';
import { connect } from 'react-redux';
import Events from './events';

import { logout } from '../../actions/session';

const mstp = state => ({
    currentUser: state.session.currentUser,
});

const mdtp = dispatch => ({
    logout: () => dispatch(logout()),
});

export default connect(mstp, null)(Events);