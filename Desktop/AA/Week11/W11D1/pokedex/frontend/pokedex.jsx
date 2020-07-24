import React from 'react';
import ReactDOM from 'react-dom';
// import { receiveAllPokemon, requestAllPokemon} from './actions/pokemon_actions';
// import {fetchAllPokemon} from './util/api_util';
import configureStore from './store/store';
// import selectAllPokemon from './reducers/selectors';
import Root from './components/root';
import  {HashRouter, Route} from "react-router-dom";

document.addEventListener('DOMContentLoaded', () => {
    // window.receiveAllPokemon = receiveAllPokemon;
    // window.requestAllPokemon = requestAllPokemon;

    // window.fetchAllPokemon = fetchAllPokemon;
    // window.getState = store.getState;
    // window.dispatch = store.dispatch;
    // window.selectAllPokemon = selectAllPokemon;
    
    const store = configureStore();
    const rootEl = document.getElementById('root');
    ReactDOM.render(<Root store={store} />, root);

});