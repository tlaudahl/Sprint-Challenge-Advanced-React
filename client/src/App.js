import React, { Component } from 'react'
import './App.css';
import axios from 'axios';
import Navbar from './components/NavBar';
import PlayerCard from './components/PlayerCard';

export class App extends Component {
  constructor() {
    super();
    this.state = {
      players: [],
    }
  }


  componentDidMount() {
    axios.get('http://localhost:5000/api/players')
    .then(res => this.setState({
      players: res.data
    }))
    .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <h1>Womens World Cup!</h1>
        <Navbar />
        {this.state.players.map(player => {
          return <PlayerCard className='playerCard' name={player.name} country={player.country} searches={player.searches} key={player.id} />
        })}
      </div>
    )
  }
}

export default App

