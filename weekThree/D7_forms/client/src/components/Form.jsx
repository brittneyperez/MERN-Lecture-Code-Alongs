import React, { useState } from 'react'

const Form = () => {
    
    const [ movie, setMovie ] = useState({
        title: "",
        year: "",
        genre: ""
    })
    
    const [ allMovies, setAllMovies ] = useState([]);
    
    const changeHandler = (e) => {
        setMovie({
            ...movie,
            [e.target.name]: e.target.value
        })
    }
    
    const submitHandler = (e) => {
        e.preventDefault();
        setAllMovies([
            ...allMovies,
            movie
        ])
        setMovie({
            title: "",
            year: "",
            genre: ""
        })
    }
    
    return (
        <div className="row">
            <form className="col-md-4 mx-auto mt-4" onSubmit={ submitHandler }>
                <h1>MovieAdder</h1>
                <div className="form-group">
                    <label htmlFor="title"><strong>Title:</strong></label>
                    <input type="text" name='title' id='title' className="form-control" onChange={ changeHandler } value={ movie.title } />
                    { movie.title && movie.title.length < 2 ? <p className="alert alert-danger">Title must be at least 2 characters</p> : "" }
                </div>
                <div className="form-group">
                    <label htmlFor="year"><strong>Year:</strong></label>
                    <input type="number" name='year' id='year' className="form-control" onChange={ changeHandler } value={ movie.year } />
                    { movie.year && movie.year < 1899 ? <p className="alert alert-danger">Year must be after 1899</p> : "" }
                </div>
                <div className="form-group">
                    <label htmlFor="genre"><strong>Genre:</strong></label>
                    <input type="text" name='genre' id='genre' className="form-control" onChange={ changeHandler } value={ movie.genre } />
                    { movie.genre && movie.genre.length < 5 ? <p className="alert alert-danger">Genre must be at least 5 characters</p> : "" }
                </div>
                <button className="btn btn-info">Add Movie</button>
            </form>
            <div className="col-md-3 mx-auto mt-4 offset-2">
                <h3>Movies</h3>
                <ul>
                    { // in the array allMovies, (1) take 2 arguments: movie and index
                        allMovies.map( (movie, i) => // (2) iterate to get title, year, genre and make a list out of it
                        <li key={i}>{ movie.title } - { movie.year } | { movie.genre }</li> )
                        // create an index for the array and iterate for each movie created
                    }
                </ul>
            </div>
        </div>
    )
}

export default Form