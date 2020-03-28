import React, { Component } from "react";

import { resetGame } from "../../src/redux/actions/game";
import { connect } from 'react-redux';

class WinnerPopup extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            display: "hide",
            theWinner: ""
        }
    }

    handleResetGame = () => {
        this.props.resetGame();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.winner !== this.props.winner) {
            this.setState({
                display: "",
                theWinner: this.props.winner
            });
        }
    }
    /*export const resetGame = (symbolCount, playerOneActive, currentWinner, currentGame) => dispatch => {*/
    render() {
        return(
            <div id="winner-popup" className={`${this.state.display}`}>
                <h2>{this.state.theWinner} wins!</h2>
                <button onClick={this.props.resetGame}>Reset Game</button>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    winner: state.game.currentWinner
});

export default connect(
    mapStateToProps, 
    {
        resetGame    
    }
)(WinnerPopup);