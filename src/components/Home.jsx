import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { BrowserRouter as  Route, Link } from "react-router-dom"
import { heros } from './../store/hero.actions'
import axios from 'axios';

class Home extends Component {
  componentDidMount() {
    axios.get('https://api.opendota.com/api/heroes')
    .then ( response => {
      const obj = {
        heros: response.data,
        heros10: response.data.slice(0,9)
      }
      this.props.heros(obj)
    })
  }
  render() {
    return (
      <div>
        <h3 style={{textAlign:'center'}}>name heros dota 2</h3>
        <div className="showitem" >
          {console.log(this.props.heros)}
        </div>

      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  heros: state.heros
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
  heros
}, dispatch)

export default connect(mapStateToProps,mapDispatchToProps)(Home);
