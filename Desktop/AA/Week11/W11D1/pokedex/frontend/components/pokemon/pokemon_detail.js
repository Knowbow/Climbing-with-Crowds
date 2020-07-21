import React from 'react';
import PokemonIndexItem from './pokemon_index_item';

class PokemonDetail extends React.Component {

    constructor(props) {
        super(props);
    };

    componentDidMount() {
        this.props.requestAllPokemon()
    };


    render() {

        let pokemon = this.props.pokemon
        const pokemonItems = pokemon.map(poke => (
            <PokemonDetailItem key={poke.id} pokemon={poke} />
        ))

        return (
            <section className="pokedex">
                <ul>{pokemonItems}</ul>
            </section>
        )
    }
}

// /pokedex/app/assets/images/pokemon_snaps
export default PokemonIndex;