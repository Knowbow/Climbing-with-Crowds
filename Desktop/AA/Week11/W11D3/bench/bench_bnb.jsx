
import React from "react";
import ReactDOM from "react-dom";
import { login, logout, signup } from './frontend/util/session_api_utils';

window.login = login
window.logout = logout
window.signup = signup

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    ReactDOM.render(<h1>Welcome to BenchBnB</h1>, root);
});