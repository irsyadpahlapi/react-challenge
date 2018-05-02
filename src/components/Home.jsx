import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"
import axios from 'axios';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      idprev: 0,
      idnext: 9,
      heros: [],
      heros10: []
    }
  };
  componentDidMount() {
    axios.get('https://api.opendota.com/api/heroes')
    .then ( response => {
      this.setState(prevState => ({
        heros: response.data,
        heros10: response.data.slice(0,9)
      }))
    })
  }
  prevs () {
    let prevpage = this.state.heros10[0]
    let index = this.state.heros.findIndex( hero => hero.id === prevpage.id)
    this.setState({
      heros10: this.state.heros.slice(index-9,index),
      idprev: index-9,
      idnext: index
    })
  }
  nexts () {
    let prevpage = this.state.heros10[0]
    let index = this.state.heros.findIndex( hero => hero.id === prevpage.id) + 9
    this.setState({
      heros10: this.state.heros.slice(index,index + 9),
      idprev:index,
      idnext:index+9
    })
  }
  render() {
    return (
      <div>
        <h3 style={{textAlign:'center'}}>name heros dota 2</h3>
        <div className="showitem" >
          {
            this.state.heros10.map(hero => {
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
        <div style={{textAlign:'center'}}>
          {
            this.state.idprev > 0 ?<button onClick={this.prevs.bind(this)}>prev</button>:""
          }
          {
            this.state.idnext < 110 ?<button onClick={this.nexts.bind(this)}>next</button>:""
          }
        </div>

      </div>
    );
  }
}

export default Home;
