import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"
import axios from 'axios';

class Detail extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      attack: '',
      roles: []
    }
  };
  componentDidMount() {
    axios.get('https://api.opendota.com/api/heroes')
    .then ( response => {
      response.data.map(data =>{
        if (this.props.match.params.id == data.id){
          this.setState(() => ({
            name: data.localized_name,
            attack: data.attack_type,
            roles: data.roles
          }))
        }
      })
    })
  }
  render() {
    return (
      <div className="showitems" >
        <h1>{this.state.name}</h1>
        <ul>
          <li>attack type : {this.state.attack}</li>
          <li>roles:
            <ul>
              {
                this.state.roles.map((data,i) => {
                  return (
                    <li key={i}>{data}</li>
                  )
                })
              }
            </ul>
          </li>
        </ul>
      </div>
    );
  }
}

export default Detail;
