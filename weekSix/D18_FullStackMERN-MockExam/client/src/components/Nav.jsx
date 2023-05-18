import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <div style={{display:'flex', alignItems:'center', justifyContent:'center',gap:'1rem'}} >
            <h1>Records Dot Com</h1>
            <Link to={'/createAlbum/form'}>Post an Album</Link>
            <Link to={'/'}>Home</Link>
        </div>
    )
}

export default Nav