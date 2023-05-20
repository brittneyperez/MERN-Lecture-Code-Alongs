import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import LoginUser from './components/LoginUser';

function App() {
  return (
    <div className="App">
      <h1>Login & Registration</h1>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <Register /> } />
          <Route path='/dashboard' element={ <Dashboard /> } />
          <Route path='/login' element={ <LoginUser /> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
