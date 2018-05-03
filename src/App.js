import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import logo from './logo.svg';
import Home from './components/Home.jsx'
import Teams from './components/Teams.jsx'
import Detail from './components/DetailHero.jsx'
import axios from 'axios';
import store from './store'

class App extends Component {
  constructor() {
    super();
    this.state = {
      player: {}
    }
    store.subscribe(() => {
      const newData = store.getState().player
      this.setState(() => ({
        player: newData
      }))
    })
  };
  componentDidMount() {
    axios.get('https://api.opendota.com/api/players/295645191')
    .then ( response => {
      const obj = {
        name: response.data.profile.personaname,
        avatar: response.data.profile.avatarfull
      }
      store.dispatch({
        type:'SHOW_PLAYER',
        payload: obj
      })
    })
  }
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to Dotabuff</h1>
          </header>
          <div className="container">
            <div className="col-3" align="center">
              <div className="kiri">

                <img src={this.state.player.avatar} />
                <br />
                {this.state.player.name}
              </div>
            </div>
            <div className="kanan col-8">
              <Switch>
                <Route exact path="/" component={ Home }/>
                <Route exact path="/detail/:id" component={ Detail }/>
                <Route path="*" component={ Teams }/>
              </Switch>
            </div>
          </div>
        </div>
      </Router>

    );
  }
}

export default App;
