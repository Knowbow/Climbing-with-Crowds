import {connect} from 'react-redux';
import {createNewUser} from '../../actions/session';
import React from 'react';
import {Link} from 'react-router-dom';
import Signup from './signup';

const mdtp = dispatch => ({
    createNewUser: formUser => dispatch(createNewUser(formUser)),
});

export default connect(null, mdtp)(Signup)
