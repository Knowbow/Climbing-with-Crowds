const fetchAllPokemon = () => (
     $.ajax({
        method: 'GET',
        url: "api/pokemon"
    })
);

export default fetchAllPokemon;

