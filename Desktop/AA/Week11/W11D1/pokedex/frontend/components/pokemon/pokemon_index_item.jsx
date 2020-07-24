import React from 'react';
import { Link } from "react-router-dom";

const PokemonIndexItem = (props)  => {
    debugger;
    let poke = props.pokemon
    return (<li key={poke.id}> 
    
    <Link to={`pokemon/${poke.id}`}> <img src={poke.image_url}></img> {poke.name} </Link>
    </li>)


}
export default PokemonIndexItem;