import React, { Component } from 'react';
import { BrowserRouter as  Route, Link } from "react-router-dom"
import axios from 'axios';
import store from './../store'

class Home extends Component {
  constructor() {
    super();
    this.state = {
      idprev: 0,
      idnext: 9,
      heros: [],
      heros10: []
    }

    store.subscribe(() => {
      const newData = store.getState().heros
      console.log(newData);
      this.setState(() => ({
        heros: newData.heros,
        heros10: newData.heros10
      }))
    })
  };
  componentDidMount() {
    axios.get('https://api.opendota.com/api/heroes')
    .then ( response => {
      const obj = {
        heros: response.data,
        heros10: response.data.slice(0,9)
      }
      store.dispatch({
        type:'SHOW_HEROS',
        payload: obj
      })
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
                  {
                    hero.id === 1
                  }
                  <img src={`http://cdn.dota2.com/apps/dota2/images/heroes/${hero.name.substr(14)}_lg.png`} />
                  <br />
                  <span style={{float:'left',marginLeft:'40px'}}>{hero.localized_name}</span>
                  <span style={{float:'right', marginRight:'40px'}}><Link to={`/detail/${hero.id}`}>detail</Link></span>
                </div>
              )
            })
          }
        </div>
        <div style={{textAlign:'center'}}>
          {
            this.state.idprev > 0 ? <button onClick={this.prevs.bind(this)}>prev</button>:""
          }
          {
            this.state.idnext < 110 ? <button onClick={this.nexts.bind(this)}>next</button>:""
          }
        </div>

      </div>
    );
  }
}

export default Home;
