import { connect } from 'react-redux';
import { login, clearErrors } from '../../actions/session';
import React from 'react';
import { Link } from 'react-router-dom';
import Login from './login';

const mstp = ({ errors }) => ({
    errors: errors.session,
});

const mdtp = dispatch => ({
    login: formUser => dispatch(login(formUser)),
    clearErrors: () => dispatch(clearErrors())
});

export default connect(mstp, mdtp)(Login)
