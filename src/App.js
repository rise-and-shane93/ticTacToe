import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import GameBoard from "./components/GameBoard";

import { greeting } from "../src/redux/actions/game";
import { connect } from 'react-redux';

class App extends Component {

  componentDidMount() {
    this.props.greeting();
  }

  render() {
    return (
      <div className="App">
        
        <GameBoard />
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
