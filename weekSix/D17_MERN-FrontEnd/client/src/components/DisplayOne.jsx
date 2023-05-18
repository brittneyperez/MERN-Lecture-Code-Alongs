import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const DisplayOne = () => {
    
    const [ show, setShow ] = useState({});
    
    const { id } = useParams();
    console.log(id) // => use this to test if its directing to that one item
    
    useEffect(() => {
        axios.get(`http://localhost:8000/api/oneShow/${id}`)
            .then((res) => {
                console.log(res)
                setShow(res.data.show)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])
    
    return (
        <div className='font-serif'>
            <h2 className='text-2xl font-bold text-zinc-800 mt-4 mb-3'>
                View <span className="italic">{ show.title }</span>
            </h2>
            <p>Aired on: { show.network } in { show.releaseYear }</p>
            <p>Created by: { show.creator }</p>
            <p>Genre: { show.genre }</p>
        </div>
    )
}

export default DisplayOne