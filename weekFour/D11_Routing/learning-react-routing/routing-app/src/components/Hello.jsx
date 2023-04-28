import React from 'react'
import { useParams } from 'react-router-dom'

const Hello = () => {
    
    const {name} = useParams();
    
    return (
        <div>
            <h1>This is the Hello Page! 👋</h1>
            <h2>Hello { name }!</h2>
            {name === "Bri" ? <h3>Welcome back!</h3> : <h3>Who are you??? Leave.</h3>}
        </div>
    )
}

export default Hello