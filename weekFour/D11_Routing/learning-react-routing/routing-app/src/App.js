import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home';
import About from './components/About';
import Neko from './components/Neko';
import Sushi from './components/Sushi';
import SurveyForm from './components/SurveyForm';
import Hello from './components/Hello';
import Navbar from './components/Navbar';

function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/about" element={ <About /> } />
          <Route path="/neko" element={ <Neko /> } />
          <Route path="/sushi" element={ <Sushi/> } />
          <Route path="/survey" element={ <SurveyForm /> } />
          <Route path="/hello/:name" element={ <Hello /> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
