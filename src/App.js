import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import logo from './logo.svg';
import Home from './components/Home.jsx'
import Teams from './components/404.jsx'
import Detail from './components/DetailHero.jsx'
import { players } from './store/player/player.actions'

class App extends Component {
  componentDidMount() {
    this.props.players()
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
                  {
                    this.props.player.loading ? <img src="http://media.lastgif.com/gifs/21715.gif" alt="team" width="500" height="250"/>:""
                  }
                  <img src={this.props.player.data.avatar} />
                  <br/>
                  {this.props.player.data.name}

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

const mapStateToProps = (state) => ({
  player: state.player
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
  players
}, dispatch)

export default connect(mapStateToProps,mapDispatchToProps)(App);
