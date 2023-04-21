import React, { useState } from 'react'

const MovieForm = ({ allMovies, setAllMovies }) => {
        
    const [ movie, setMovie ] = useState({
        title: "",
        year: "",
        genre: ""
    })
    
    const [ errors, setErrors ] = useState("")
    
    const movieValidation = () => {
        let isValid = true
        if (movie.title.length < 2 || movie.genre.length < 5 || movie.year < 1900) {
            isValid = false
        }
        return isValid
    }
    
    const changeHandler = (e) => {
        setMovie({
            ...movie,
            [e.target.name]: e.target.value
        })
    }
    
    const submitHandler = (e) => {
        e.preventDefault();
        if (movieValidation()) {
            setAllMovies([ ...allMovies, movie ])
            setMovie({ title: "", year: "", genre: "" })
            setErrors("")
            /* aka...
                * let validator = movieValidation()
                validator checks if true or false
                * if (validator === true) {}
            */
        } else {
            setErrors(
                "ERROR. Please enter a movie."
            )
            /* above can also be written as
                setErrors({ error "there was an error" })
            */
            /* Some other errors that can be added in setErros:
                title: movie.title.length < 2 ? "Title must be at least 2 characters" : "",
                year: movie.year < 1900 ? "Year must be before 1900" : "",
                genre: movie.genre.length < 2 ? "Genre must be at least 5 characters" : "",
            */
            setMovie({
                title: "",
                year: "",
                genre: ""
            })
        }
    }
    
    return (
        <div className="row">
            <form className="col-md-4 mx-auto mt-4" onSubmit={ submitHandler }>
                <h1>MovieAdder</h1>
                { errors ? <p className='alert alert-danger'>{ errors }</p> : null}
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
            
        </div>
    )
}

export default MovieForm