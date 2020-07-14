import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './clock';
import Tab from './tabs';

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    const tabbed = {
        title: "hi",
        content: "nonexistent"
    };

    function Everything(){
        return (
        <>
            <Clock />
            <Tab />
        </>
        )};
    const m1 = <h1>HERE I AM</h1>;

    ReactDOM.render(<Clock />, root);
});