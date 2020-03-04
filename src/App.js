import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { greeting } from "../src/redux/actions/game";
import { connect } from 'react-redux';

class App extends Component {

  componentDidMount() {
    this.props.greeting();
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  msg: state.message
})

export default connect(
  mapStateToProps,
  {
    greeting
  }
)(App);
