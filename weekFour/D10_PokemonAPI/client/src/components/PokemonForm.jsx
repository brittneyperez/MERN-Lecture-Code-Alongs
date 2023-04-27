import React, { useState } from 'react';
import axios from 'axios';

const PokemonForm = () => {
    
    const [pokemonList, setPokemonList] = useState([]);
    
    const submitHandler = (e) => {
        e.preventDefault();
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=807')
        .then(res => {
            console.log(res.data.results);
            setPokemonList(res.data.results)
        })
        .catch(err => console.log(err));
    }
    
    return (
        <div>
            <h1>Fetch Pokémon</h1>
            <form onSubmit={ submitHandler }>
                <button>Fetch All Pokémon</button>
            </form>
            <hr style={{width: '450px'}} />
            {pokemonList.map(pokemon => (
                <div key={pokemon.name}>
                    <h4>{`#${pokemon.url.split('/')[6]} ${pokemon.name}`}</h4>
                    <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.url.split('/')[6]}.png`} alt={pokemon.name} />
                </div>
        ))}
        </div>
    )
}

export default PokemonForm