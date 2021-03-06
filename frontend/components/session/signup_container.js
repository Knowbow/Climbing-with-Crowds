import {connect} from 'react-redux';
import {createNewUser, clearErrors} from '../../actions/session';
import React from 'react';
import {Link} from 'react-router-dom';
import Signup from './signup';

const mstp = ({errors}) => ({
    errors: errors.session,
});

const mdtp = dispatch => ({
    createNewUser: formUser => dispatch(createNewUser(formUser)),
    clearErrors: () => dispatch(clearErrors())
});

export default connect(mstp, mdtp)(Signup)
