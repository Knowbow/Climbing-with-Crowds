import React from 'react';
import ReactDOM from 'react-dom';
import receiveAllPokemon from './actions/pokemon_actions';
import fetchAllPokemon from './util/api_util';
import configureStore from './store/store';


document.addEventListener('DOMContentLoaded', () => {
    window.receiveAllPokemon = receiveAllPokemon;
    window.fetchAllPokemon = fetchAllPokemon;
    const store = configureStore();

    const rootEl = document.getElementById('root');
    ReactDOM.render(<h1>Pokedex</h1>, rootEl);

});