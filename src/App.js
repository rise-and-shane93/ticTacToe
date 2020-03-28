import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import GameBoard from "./components/GameBoard";
import Player from "./components/Player";
import WinnerPopup from "./components/WinnerPopup";

import { greeting } from "../src/redux/actions/game";
import { connect } from 'react-redux';

class App extends Component {

  componentDidMount() {
    this.props.greeting();
  }

  render() {
    return (
      <div className="App">
        <h1>Tic Tac Toe</h1>
        <div id="players">
          <Player num={1} id="player-1" />
          <Player num={2} id="player-2" />
        </div>
        <GameBoard />
        <WinnerPopup />
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
