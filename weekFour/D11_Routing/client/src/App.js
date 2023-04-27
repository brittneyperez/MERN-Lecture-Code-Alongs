import './App.css';
import Cat from './components/Cat';
import Home from './components/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sushi from './components/Sushi';
import Katanas from './components/Katanas';
import Form from './components/Form';
import Hello from './components/Hello';

function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/cat" element={ <Cat /> } />
          <Route path="/sushi" element={ <Sushi /> } />
          <Route path="/katanas" element={ <Katanas /> } />
          <Route path="/form" element={ <Form /> } />
          <Route path="/hello/:name/:pokePet" element={ <Hello /> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
