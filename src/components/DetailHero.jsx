import React, { Component } from 'react';
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
            name: data.name,
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
        <img src={`http://cdn.dota2.com/apps/dota2/images/heroes/${this.state.name.substr(14)}_lg.png`} />
        <h1>{this.state.name.substr(14)}</h1>
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
