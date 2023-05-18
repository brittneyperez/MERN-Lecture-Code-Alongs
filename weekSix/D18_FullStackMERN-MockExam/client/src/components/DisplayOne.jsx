import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

const DisplayOne = () => {
    
    const [ oneAlbum, setOneAlbum ] = useState({})
    const { id } = useParams() // this will be passed down to useEffect to access Album Details
    const navigate = useNavigate()
    
    useEffect(() => {
        axios.get(`http://localhost:8000/api/oneAlbum/${id}`)
        .then((res) => {
            console.log(res.data)
            setOneAlbum(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
    }, [])
    
    const deleteHandler = (id) => {
        axios.delete(`http://localhost:8000/api/deleteAlbum/${id}`)
            .then((res) => {
                navigate('/') // after deletetion, navigate to Homepage
            })
            .catch((err) => {
                console.log(err)
            })
    }
    
    
    return (
        <div>
            <h2>{ oneAlbum.albumName }</h2>
            <p>{ oneAlbum.releaseYear } • { oneAlbum.artist } • { oneAlbum.genre }</p>
            <p>Explicit?</p>
            { oneAlbum.explicit ? <p>Yes</p> : <p>No</p> }
            
            <div id="album_actions">
                <button onClick={ () => deleteHandler(oneAlbum._id) }>Delete Album</button>
            </div>
        </div>
    )
}

export default DisplayOne