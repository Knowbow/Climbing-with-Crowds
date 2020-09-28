import React from "react";
import { connect } from "react-redux";
import Profile from "./profile";
import { fetchUser } from "../../actions/session";

import { logout } from "../../actions/session";

const mstp = (state) => ({
  currentUser: state.session.currentUser,
});

const mdtp = (dispatch) => ({
  fetchUser: (id) => dispatch(fetchUser(id)),
});

export default connect(mstp, mdtp)(Profile);
