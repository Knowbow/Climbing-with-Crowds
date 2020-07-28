import * as APIUtil from '../util/session_api_utils'

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS'

const receiveCurrentUser = user => ({
    type: RECEIVE_CURRENT_USER,
    user,
});

const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER,
});

export const createNewUser = formUser => dispatch => (
    APIUtil.signup(formUser).then(user => (
        dispatch(receiveCurrentUser(user))
    ))
)

export const login = formuser => dispatch => (
    APIUtil.login(user).then(user => (
        dispatch(receiveCurrentUser(user))
    ))
)
export const logout = () => dispatch => (
    APIUtil.logout().then(user => (
        dispatch(logout())
    ))
)