import React, { useState } from 'react'

const Form = () => {
    
    //* Option 1: Using seperate state and have more handlers
    /* 
        const [ title, setTitle ] = useState("Unicorn")
        const [ year, setYear ] = useState(1920)
        const [ genre, setGenre ] = useState("")
        
        /// onChange={ (e) => setTitle(e.target.value) }
        /// a more concise way of writing anonymous functions can be: be called before return:
        const handleYear = (e) => { setYear(e.target.value) }
        const handleGenre = (event) => { setGenre(event.target.value) }
        /// the func `handleYear` & `handleGenre` need to be called in `onChange`
        /// when we console.log(e) w/in the handler, we can check 
        /// the value by: going to console > target > value: ... (click on elipsis)
        
    */
    
    //* Option 2: Use one state to have all in one place – MOST EFFICIENT
    const [ movie, setMovie ] = useState({ // this mimics what we see with the dev tool
        title: "",
        year: "",
        genre: ""
    })
    const changeHandler = (e) => { // this function simultaneously handle all changes
        // when there is a change within the keys' values above,
        setMovie({
            ...movie, // we use the spread operator, to GET all the data
            [e.target.name]: e.target.value, // then we check with the name in the form
            // the "name" can also be seen in the console
        })
    }
    
    return (
        <div className="row">
            <form className="col-md-4 mx-auto mt-4">
                <h1>MovieAdder</h1>
                <div className="form-group">
                    <label htmlFor="title"><strong>Title:</strong></label>
                    <input 
                        type="text" name='title' id='title' className="form-control"
                        onChange={ changeHandler }
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="year"><strong>Year:</strong></label>
                    <input
                        type="number" name='year' id='year' className="form-control"
                        onChange={ changeHandler }
                        />
                </div>
                <div className="form-group">
                    <label htmlFor="genre"><strong>Genre:</strong></label>
                    <input 
                        type="text" name='genre' id='genre' className="form-control"
                        onChange={ changeHandler }
                    />
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