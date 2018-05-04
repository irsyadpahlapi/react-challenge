import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { BrowserRouter as  Route, Link } from "react-router-dom"
import { heros } from './../store/hero/hero.actions'
import axios from 'axios';

class Home extends Component {

  constructor() {
    super();
    this.state = {
      idprev: 0,
      idnext: 9
    }
  }
  componentDidMount() {
    this.props.heros()
  }

  prevs () {
    let prevpage = this.props.hero.data.heros10[0]
    let index = this.props.hero.data.heros.findIndex( hero => hero.id === prevpage.id)
    this.props.hero.data.heros10 = this.props.hero.data.heros.slice(index-9,index),
    this.setState({
      idprev: index-9,
      idnext: index
    })
  }
  nexts () {
    let prevpage = this.props.hero.data.heros10[0]
    let index = this.props.hero.data.heros.findIndex( hero => hero.id === prevpage.id) + 9
      this.props.hero.data.heros10 = this.props.hero.data.heros.slice(index,index + 9)
      this.setState(() => ({
        idprev:index,
        idnext:index+9
      }))
  }
  render() {
    if (this.props.hero.data.heros10) {
      return (
        <div>
          <h3 style={{textAlign:'center'}}>name heros dota 2</h3>
          <div className="showitem" >
            {
              this.props.hero.data.heros10.map(hero => {
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
              this.state.idnext < 115 ? <button onClick={this.nexts.bind(this)}>next</button>:""
            }
          </div>
        </div>
      );
    } else {
      return <img src="http://media.lastgif.com/gifs/21715.gif" alt="team" width="500" height="250"/>
    }
  }
}

const mapStateToProps = (state) => ({
  hero: state.hero
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
  heros
}, dispatch)

export default connect(mapStateToProps,mapDispatchToProps)(Home);
