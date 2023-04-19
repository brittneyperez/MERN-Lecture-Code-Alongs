import React, { useState } from 'react'

const Form = () => {
    
    const [ movie, setMovie ] = useState({
        title: "",
        year: "",
        genre: ""
    })
    
    // Creating Validations (assuming we have a DB)
    const [ allMovies, setAllMovies ] = useState([]);
    
    const changeHandler = (e) => {
        setMovie({
            ...movie,
            [e.target.name]: e.target.value
        })
    }
    
    // prevent browser from refreshing to keep access of data
    const submitHandler = (e) => { // onSubmit is on form, not on btn
        e.preventDefault();
        setAllMovies([
            ...allMovies, // take all the movies we have stored
            movie // and add this new movie to that collection
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
                    {/* if there's something and less than 3 ? alert danger : if not, then null */}
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
            <div className="col-md-4 mx-auto mt-4 offset-2">
                <h3>Title: { movie.title }</h3>
                <h3>Year: { movie.year }</h3>
                <h3>genre: { movie.genre }</h3>
            </div>
        </div>
    )
}

export default Form