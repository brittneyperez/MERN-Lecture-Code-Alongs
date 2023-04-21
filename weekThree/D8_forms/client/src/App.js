import './App.css';
import React, { useState } from 'react';
import MovieForm from './components/MovieForm';
import DisplayAll from './components/DisplayAll';
import DisplayOne from './components/DisplayOne';
import UseEffect from './components/UseEffect';

function App() {
  //        this   &    this...
  const [ allMovies, setAllMovies ] = useState([]);
  
  return (
    <div className="App">
      {/*   ...needs to match   this       and            this  */}
      <MovieForm allMovies={ allMovies } setAllMovies={ setAllMovies } /><hr />
      <DisplayAll movieList={ allMovies } /><hr />
      <DisplayOne oneMovie={ allMovies } /><hr />
      <UseEffect />
    </div>
  );
}

export default App;
