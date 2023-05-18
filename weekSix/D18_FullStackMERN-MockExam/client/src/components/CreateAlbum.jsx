import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const CreateAlbum = () => {
    
    const navigate = useNavigate()
    const [ album, setAlbum ] = useState({
        albumName: "",
        artist: "",
        releaseYear: 1920,
        genre: "",
        explicit: false
    })
    
    const [ errors, setErrors ] = useState({}) // {} because errors are objects
    
    const changeHandler = (e) => {
        if(e.target.name === 'explicit') { // if checked
            // get everything from album, and grab current value of this field
            setAlbum({...album, explicit: !album.explicit}) // and change state to explicit
        } else { // otherwise leave it alone
            setAlbum({ ...album, [e.target.name]: e.target.value})
        }
    }
    
    const submitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/newAlbum', album)
            .then((res) => {
                console.log(res)
                navigate('/')
            })
            .catch((err) => {
                console.log(err)
                setErrors(err.response.data.errors) // this will set errors if invalid data is sent
            })
    }
    
    
    return (
        <div className='w-full max-w-lg mx-auto'>
            <form onSubmit={ submitHandler }>
                <h2 className='text-2xl font-serif font-bold text-zinc-800 mt-4 mb-3'>Post Your Favorite Album</h2>
                
                <div className='md:flex md:items-center mb-6'>
                    <div className="md:w-1/4">
                        <label className='block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4'>
                            Album Name:
                        </label>
                    </div>
                    <div className='md:w-3/5'>
                        <input type="text" name="albumName" onChange={ changeHandler } value={album.albumName}
                            className='bg-slate-100 appearance-none border-2 border-slate-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-sky-200'
                        />
                        { errors.albumName ? <p className='bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded'> { errors.albumName.message }</p> : null }
                    </div>
                </div>
                
                <div className='md:flex md:items-center mb-6'>
                    <div className="md:w-1/4">
                        <label className='block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4'>
                            Artist:
                        </label>
                    </div>
                    <div className='md:w-3/5'>
                        <input type="text" name="artist" onChange={ changeHandler } value={album.artist}
                            className='bg-slate-100 appearance-none border-2 border-slate-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-sky-200'
                        />
                        { errors.artist ? <p className='bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded'>{ errors.artist.message }</p> : null }
                    </div>
                </div>
                
                <div className='md:flex md:items-center mb-6'>
                    <div className="md:w-1/4">
                        <label className='block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4'>
                            Release Year:
                        </label>
                    </div>
                    <div className='md:w-3/5'>
                        <input type="number" name="releaseYear" onChange={ changeHandler } value={album.releaseYear}
                            className='bg-slate-100 appearance-none border-2 border-slate-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-sky-200'
                        />
                        { errors.releaseYear ? <p className='bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded'> { errors.releaseYear.message }</p> : null }
                    </div>
                </div>
                
                <div className='md:flex md:items-center mb-6'>
                    <div className="md:w-1/4">
                        <label className='block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4'>
                            Genre:
                        </label>
                    </div>
                    <div className='md:w-3/5'>
                        {/* <input type="text" name="genre" onChange={ changeHandler }
                            className='bg-slate-100 appearance-none border-2 border-slate-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-sky-200'
                        /> */}
                        <select name='genre' onChange={ changeHandler } value={album.genre}>
                            <option value="">--Select One--</option>
                            <option value="Rock">Rock</option>
                            <option value="Alternative">Alternative</option>
                            <option value="Hip-Hop/Rap">Hip-Hop/Rap</option>
                            <option value="Pop">Pop</option>
                            <option value="Classical">Classical</option>
                            <option value="Metal">Metal</option>
                            <option value="Blues">Blues</option>
                            <option value="Jazz">Jazz</option>
                            <option value="Country">Country</option>
                            <option value="RBB/Soul">RBB/Soul</option>
                            <option value="J-Pop">J-Pop</option>
                            <option value="K-Pop">K-Pop</option>
                            <option value="Mando-Pop">Mando-Pop</option>
                            <option value="Lo-Fi">Lo-Fi</option>
                            <option value="Video Game">Video Game</option>
                        </select>
                        { errors.genre ? <p className='bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded'>{ errors.genre.message }</p> : null }
                    </div>
                </div>
                
                <div className='md:flex md:items-center mb-6'>
                    <div className="md:w-1/4">
                        <label className='block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4'>
                            Explicit?
                        </label>
                    </div>
                    <div className='md:w-3/5'>
                        <input type="checkbox" name="explicit" onChange={ changeHandler } value={ album.explicit }
                            className='bg-slate-100 appearance-none border-2 border-slate-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-sky-200'
                        />
                        {/* { errors.explicit ? <p className='bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded'>{ errors.explicit.message }</p> : null } */}
                    </div>
                </div>
                <div>
                    <input type="submit" value="Post Album" 
                        className='bg-gradient-to-br from-sky-200 to-rose-100 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-indigo-300 dark:focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2'
                    />
                </div>
            </form>
        </div>
    )
}

export default CreateAlbum