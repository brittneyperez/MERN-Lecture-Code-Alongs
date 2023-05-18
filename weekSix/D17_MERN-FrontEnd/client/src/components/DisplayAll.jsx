import React, { useEffect } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

const DisplayAll = ({ tvShowList, setTvShowList }) => {
    
    useEffect(() => {
    axios.get(`http://localhost:8000/api/allShows`)
        .then((response) => {
            console.log(response)
            setTvShowList(response.data.shows)
        })
        .catch((error) => {
            console.log(error)
        })
    }, [])
    
    const deleteHandler = (id) => {
        /* 
            for this to work we need to first create an anonymous arrow function 
            that will pass the show's id as an argument for the deleteHandler (see line 37), then
            this id can be passed though the deleteHandler to execute the DELETE function
        */
        console.log(`This show's id is ${id}.`)
        axios.delete(`http://localhost:8000/api/deleteShow/${id}`)
            .then((res) => {
                console.log(res);
                // ! we need to update the App's state so the deletion reflects on the client UI, otherwise it will require a hard refresh to reflect the changes in the backend to reflect in the frontend
                // ? the new tvShowList = will include all shows with an id that doesn't match what was passed in to delete
                const updatedShowList = tvShowList.filter((show) => show._id !== id)
                setTvShowList(updatedShowList) // test DELETE on an object and see how it disappears INSTANTLY!
            })
            .catch((err) => console.log(err))
    }
    
    return (
        <div className='container mx-auto'>
            <h2 className='text-2xl font-serif font-bold text-zinc-800'>All of Our Shows</h2>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
            {
                tvShowList.map((show) => (
                    <div key={show._id} className='my-2 border border-zinc-400 rounded px-4 py-4 bg-white shadow-md rounded'>
                        <h3 className='italic text-xl font-serif font-semibold text-zinc-700'>{ show.title }</h3>
                        <div id="view_one_page" className="mt-3">
                            <Link to={`/viewShow/${show._id}`} className='bg-gradient-to-br from-sky-200 to-rose-100 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-indigo-300 dark:focus:ring-indigo-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-2'>
                                View
                            </Link>
                            <Link to={`/editShow/${show._id}`} className='bg-gradient-to-br from-rose-100 to-amber-100 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-rose-300 dark:focus:ring-rose-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-2'>
                                Edit
                            </Link>
                            <button onClick={() => deleteHandler(show._id)} className='md:mt-4 bg-gradient-to-br from-rose-200 to-red-300 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-rose-300 dark:focus:ring-rose-600 font-medium rounded-lg text-sm px-4 py-2 text-center mr-2'>
                                Delete
                            </button>
                        </div>
                    </div>
                ))
            }
            </div>
        </div>
    )
}

export default DisplayAll