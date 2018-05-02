import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"
import axios from 'axios';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      heros: []
    }
  };
  componentDidMount() {
    axios.get('https://api.opendota.com/api/heroes')
    .then ( response => {
      this.setState(prevState => ({
        heros: response.data
      }))
    })
  }
  render() {
    return (
      <div>
        <h3 style={{textAlign:'center'}}>name heros dota 2</h3>
        <div className="showitem" >
          {
            this.state.heros.map(hero => {
              return (
                <div className="item col-4" key={hero.id}>
                  <img src={`https://api.adorable.io/avatars/191/${hero.localized_name}`} />
                  <br />
                  {hero.localized_name}
                  <br />
                  <Link to={`/${hero.id}`}>detail</Link>
                </div>
              )
            })
          }
        </div>
      </div>
    );
  }
}

export default Home;
