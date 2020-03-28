import React, { Component } from "react";

import { playerAction } from "../../src/redux/actions/game";
import { connect } from 'react-redux';

class Player extends Component {

    constructor(props) {
        super(props);

        this.state = {
            score: 0
        }
    }

    componentDidMount() {
        // const active = () => {
        //     if ((this.props.currPlayer && this.props.num === 1) || (!this.props.currPlayer && this.props.num === 2)) {
        //         return "active-player";
        //     }
        // };
        // active();
        // console.log(active, this.props.num);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.currentWinner !== this.props.currentWinner && this.props.num === 1) {
            this.setState({
                score: this.props.playerOneScore
            });
        } else if (prevProps.currentWinner !== this.props.currentWinner && this.props.num === 2) {
            this.setState({
                score: this.props.playerTwoScore
            });
        }
    }

    render() {
        const active = () => {
            if ((this.props.currPlayer && this.props.num === 1) || (!this.props.currPlayer && this.props.num === 2)) {
                return "active-player";
            } else {
                return "";
            }
        };

        // const playerScore = () => {
        //     if 
        // }
        return (
            <div className={`player ${active()}`}>
                <h2>Player {this.props.num}</h2>
                <p>Score: {this.state.score}</p>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    currPlayer: state.game.playerOneActive,
    currentWinner: state.game.currentWinner,
    playerOneScore: state.game.playerOneScore,
    playerTwoScore: state.game.playerTwoScore
  })
  
  export default connect(
    mapStateToProps,
    {
        playerAction
    }
  )(Player);