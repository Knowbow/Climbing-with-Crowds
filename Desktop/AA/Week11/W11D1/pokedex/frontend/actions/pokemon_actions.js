import APIUtil from '../util/api_util'
export const RECEIVE_ALL_POKEMON = 'RECEIVE_ALL_POKEMON';

const receiveAllPokemon = pokemon => ({
    type: RECEIVE_ALL_POKEMON,
    pokemon
})

export default receiveAllPokemon;


export const requestAllPokemon = () => (dispatch) => (
    APIUtil.fetchAllPokemon()
        .then(pokemon => dispatch(receiveAllPokemon(pokemon)))
)