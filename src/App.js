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

  constructor(props) {
    super(props);
    // this.state = {
    //   player
    // }
  }

  // componentDidUpdate(prevProps) {
  //   if (prevProps.playerOneScore !== this.props.playerOneScore) {
  //       this.setState({
  //           score: this.props.playerOneScore
  //       });
  //   } else if (prevProps.playerTwoScore !== this.props.playerTwoScore) {
  //       this.setState({
  //           score: this.props.playerTwoScore
  //       });
  //   }
  // }

  createPlayers = () => {
    let divs = [];
    // outer loop to create parent
    for (let i = 1; i <= 2; i++) {
      // let playerScore = i === 1 ? this.props.playerOneScore : this.props.playerTwoScore;
      divs.push(<Player key={i} num={i} id={`player-${i}`} className="game-player"/>);
    }
    return divs;
  }

  render() {
    return (
      <div className="App">
        <h1>Tic Tac Toe</h1>
        <div id="players">
          {/* <Player num={1} id="player-1" />
          <Player num={2} id="player-2" /> */}
          {this.createPlayers()}
        </div>
        <GameBoard />
        <WinnerPopup />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  msg: state.message,
  playerOneScore: state.game.playerOneScore,
  playerTwoScore: state.game.playerTwoScore
})

export default connect(
  mapStateToProps,
  {
    greeting
  }
)(App);
