import './App.css';
import React, { Component } from 'react'
import PlayerForm from './components/PlayerForm';

// We are not writing functions so we can remove function App() and write instead class App
class App extends Component {
  
  // ! state will go here
  // hooks only exist for Functional Components, but Class Components have no need for these.
  state = { // NEEDS to be called "state"
    players: [ // make an object
      {name: 'Keqing', position: 'Electro Sword'},
      {name: 'Tartaglia', position: 'Hydro Bow'},
      {name: 'Xiao', position: 'Anemo Polearm'},
    ]
  }
  
  // ! Run a Render Method
  render(){ return ( // Render Method will handle the "return()" statement 
    <div className="App">
      <h1>Hello Class Component</h1>
      <PlayerForm 
        // players={ this.state } <= this is not necessary for this component but this is how we can pass objects down as props
      />
      {
        this.state.players.map((player, idx) => (
          <div key={ idx }>
            <h3>Name: { player.name }</h3>
            <p>Position: { player.position }</p>
          </div>
        ))
      }
    </div>
  )};
}

export default App;
