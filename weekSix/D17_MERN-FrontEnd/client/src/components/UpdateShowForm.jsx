import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const UpdateShowForm = () => {
    
    const navigate = useNavigate();
    const { id } = useParams();
    const [ show, setShow ] = useState({
        title: "",
        releaseYear: 1920,
        network: "",
        creator: "",
        genre: ""
    })
    const [ errors, setErrors ] = useState({}) // ! if errors are not working, check axios call to see if the backend route matches the frontend route
    
    const changeHandler = (e) => {
        setShow({...show, [e.target.name]: e.target.value})
    }
    
    // ! find the show to update it first
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
    
    // ! then update submit handler so it will PATCH the info, NOT POST
    const submitHandler = (e) => {
        e.preventDefault();
        axios.patch(`http://localhost:8000/api/updateShow/${id}`, show) // "show" is the object that will send back the PATCH data to the request.body in the backend
            .then((res) => {
                console.log(res);
                navigate('/');
            })
            .catch((err) => {
                console.log(err.response.data.errors); // this will now log the error for each object; the err message is what we want
                setErrors(err.response.data.errors); // err message will show up in Components > State hooks
            })
    }
    
    return (
        <div className='w-full max-w-lg mx-auto'>
            <form onSubmit={ submitHandler }>
                <h2 className='text-2xl font-serif font-bold text-zinc-800 mt-4 mb-3'>Edit Show</h2>
                
                <div className='md:flex md:items-center mb-6'>
                    <div className="md:w-1/4">
                        <label className='block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4'>
                            Title:
                        </label>
                    </div>
                    <div className='md:w-3/5'>
                        <input type="text" name="title" onChange={ changeHandler } value={ show.title }
                            className='bg-slate-100 appearance-none border-2 border-slate-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-sky-200'
                        />
                        { errors.title ? <p className='bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded'>{ errors.title.message }</p> : null}
                    </div>
                </div>
                
                <div className='md:flex md:items-center mb-6'>
                    <div className="md:w-1/4">
                        <label className='block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4'>
                            Release Year:
                        </label>
                    </div>
                    <div className='md:w-3/5'>
                        <input type="number" name="releaseYear" onChange={ changeHandler } value={ show.releaseYear }
                            className='bg-slate-100 appearance-none border-2 border-slate-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-sky-200'
                        />
                        { errors.releaseYear ? <p className='bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded'> { errors.releaseYear.message } </p> : null }
                    </div>
                </div>
                
                <div className='md:flex md:items-center mb-6'>
                    <div className="md:w-1/4">
                        <label className='block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4'>
                            Network:
                        </label>
                    </div>
                    <div className='md:w-3/5'>
                        <input type="text" name="network" onChange={ changeHandler } value={ show.network }
                            className='bg-slate-100 appearance-none border-2 border-slate-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-sky-200'
                        />
                        { errors.network ? <p className='bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded'>{ errors.network.message }</p> : null }
                    </div>
                </div>
                
                <div className='md:flex md:items-center mb-6'>
                    <div className="md:w-1/4">
                        <label className='block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4'>
                            Creator:
                        </label>
                    </div>
                    <div className='md:w-3/5'>
                        <input type="text" name="creator" onChange={ changeHandler } value={ show.creator }
                            className='bg-slate-100 appearance-none border-2 border-slate-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-sky-200'
                        />
                        { errors.creator ? <p className='bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded'>{ errors.creator.message }</p> : null }
                    </div>
                </div>
                
                <div className='md:flex md:items-center mb-6'>
                    <div className="md:w-1/4">
                        <label className='block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4'>
                            Genre:
                        </label>
                    </div>
                    <div className='md:w-3/5'>
                        <input type="text" name="genre" onChange={ changeHandler } value={ show.genre }
                            className='bg-slate-100 appearance-none border-2 border-slate-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-sky-200'
                        />
                        { errors.genre ? <p className='bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded'>{ errors.genre.message }</p> : null }
                    </div>
                </div>
                <div>
                    <input type="submit" value="Edit Show" 
                        className='bg-gradient-to-br from-sky-200 to-rose-100 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-indigo-300 dark:focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2'
                    />
                </div>
            </form>
        </div>
    )
}

export default UpdateShowForm