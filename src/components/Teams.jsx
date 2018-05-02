import React, { Component } from 'react';
import axios from 'axios';

class Teams extends Component {
  render() {
    return (
      <div>
        <h3 style={{textAlign:'center'}}>page {this.props.match.params[0]} tidak ditemukan</h3>

      </div>
    );
  }
}

export default Teams;
