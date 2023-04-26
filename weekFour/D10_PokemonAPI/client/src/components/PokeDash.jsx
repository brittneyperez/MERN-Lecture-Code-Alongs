import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PokeDash = () => {
    
    const [ pokemon, setPokemon ] = useState([]);
    
    useEffect(() => {
        axios.get("https://pokeapi.co/api/v2/pokemon")
        // * Below is our promise
        .then(res => { // this will run and grab all the info for our app by making a request
            // console.log(res);
            console.log(res.data);
            // console.log(res.data.results);
            setPokemon(res.data.results); // this is our response to our request
        })
        // * However if there is an error, it will console.log it to let us know
        .catch(err => console.log(err))
    }, []) // this will only run when the component is mounting
    
    return (
        <div>
            <h1>PokeDash</h1>
            {pokemon.map((poke, i) => {
                return (
                    <div key={i}>
                        
                        <h4>{ poke.id } { poke.name }</h4>
                        <p>{ poke.url }</p>
                    </div>
                )})
            }
        </div>
    )
}

export default PokeDash