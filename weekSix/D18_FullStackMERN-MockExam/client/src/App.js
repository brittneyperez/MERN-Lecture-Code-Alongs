import './App.css';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Nav from './components/Nav';
import DisplayAll from './components/DisplayAll';
import CreateAlbum from './components/CreateAlbum';
import DisplayOne from './components/DisplayOne';
import UpdateAlbum from './components/UpdateAlbum';

function App() {
  
  const [ allAlbums, setAllAlbums ] = useState([])
  
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/' element={ <DisplayAll allAlbums={ allAlbums } setAllAlbums={ setAllAlbums } /> } />
          <Route path='/createAlbum/form' element={ <CreateAlbum /> } />
          <Route path='/oneAlbum/:id' element={ <DisplayOne /> } />
          <Route path='/editAlbum/:id' element={ <UpdateAlbum /> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
