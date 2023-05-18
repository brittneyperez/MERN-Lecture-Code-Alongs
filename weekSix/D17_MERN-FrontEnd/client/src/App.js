import './App.css';
import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import CreateShowForm from './components/CreateShowForm';
import DisplayAll from './components/DisplayAll';
import DisplayOne from './components/DisplayOne';
import UpdateShowForm from './components/UpdateShowForm';


function App() {
  
  const [ tvShowList, setTvShowList ] = useState([]);
  
  return (
    <div className="App">
      <BrowserRouter>
        <h1 className='text-3xl font-serif font-bold mt-3 text-zinc-900'>Welcome to the TV Show App!</h1>
        <div id="link_group" className="flex justify-center gap-3 mb-3">
          <Link to={"/createShow/form"} className='text-sky-600 no-underline hover:underline hover:text-rose-400'>
            Add your favorite show
          </Link>
          |
          <Link to={"/"} className='text-sky-600 no-underline hover:underline hover:text-rose-400'>
            Home
          </Link>
        </div>
        
        <Routes>
          <Route path="/" element={ <DisplayAll tvShowList={ tvShowList } setTvShowList={ setTvShowList } /> } />
          <Route path="/createShow/form" element={ <CreateShowForm /> } />
          <Route path="/viewShow/:id" element={ <DisplayOne /> } />
          <Route path="/editShow/:id" element={ <UpdateShowForm /> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
