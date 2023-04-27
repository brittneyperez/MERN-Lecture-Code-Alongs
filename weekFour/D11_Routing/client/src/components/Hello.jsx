import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Hello = () => {
    // variable needs to match what is in the route
    const { name, pokePet } = useParams();
    
    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${pokePet}`)
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }, [])
    
    return (
        <div>
            <h1>This is a Hello page!</h1>
            <h2>Hello { name } :)</h2>
            { name === "Bri" ? <h4>You're cool!</h4> : <h4>You are not Bri, so not as cool!</h4> }
        </div>
    )
}

export default Hello