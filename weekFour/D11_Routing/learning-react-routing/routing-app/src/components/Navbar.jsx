import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <h1>Welcome to React Routing</h1>
            <p>
                <Link to={"/"}>Home</Link> | <Link to={"/neko"}>Neko</Link> | <Link to={"/sushi"}>Sushi</Link>
            </p>
        </div>
    )
}

export default Navbar