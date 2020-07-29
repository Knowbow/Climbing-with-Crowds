import { connect } from 'react-redux';
import { login } from '../../actions/session';
import React from 'react';
import { Link } from 'react-router-dom';
import Login from './login';

const mdtp = dispatch => ({
    login: formUser => dispatch(login(formUser)),
});

export default connect(null, mdtp)(Login)
