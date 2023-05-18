import './App.css';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Nav from './components/Nav';
import DisplayAll from './components/DisplayAll';
import CreateAlbum from './components/CreateAlbum';

function App() {
  
  const [ allAlbums, setAllAlbums ] = useState([])
  
  return (
    <div className="App">
      {/* <h1>Welcome to Albums App</h1> */}
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/' element={ <DisplayAll allAlbums={ allAlbums } setAllAlbums={ setAllAlbums } /> } />
          <Route path='/createAlbum/form' element={ <CreateAlbum /> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
