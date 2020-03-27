import React, { Component } from "react";

import { playerAction, updateGameState, handleGameWinner } from "../../src/redux/actions/game";
import { connect } from 'react-redux';

class Square extends Component {

    componentDidMount() {
        let row = 0;
        let index = 0;

        if (this.props.count % 3 === 0) {
            index = 0;
            // row = 0;
        } else if (this.props.count % 3 === 1) {
            index = 1;
            // row = 1;
        } else if (this.props.count % 3 === 2) {
            index = 2;
            // row = 2
        }

        if (this.props.count <= 2) {
            row = 0;
        } else if (this.props.count >= 3 && this.props.count <= 5) {
            row = 1;
        } else if (this.props.count >= 6) {
            row = 2;
        }

        this.setState({
            row,
            index
        });
    }

    constructor(props) {
        super(props);

        this.gameSquare = React.createRef();
        this.symbol = React.createRef();
        this.state = {
            symbol: undefined,
            fontAwesome: undefined,
            row: 0,
            index: 0
        }
    }

    handleSquareFill = (playerOneBool) => {
        let fontAwesome = playerOneBool ? "times" : "circle-thin";
        let symbol = playerOneBool ? "X" : "O";
        this.setState({
            fontAwesome,
            symbol
        }, () => {
            this.props.updateGameState(this.state.symbol, this.state.index, this.state.row);
            this.props.handleGameWinner(this.props.currentGame, this.state.symbol);
        });
    }

    render() {
        
        return (
            <div
                ref={this.renderedWeatherData}
                onClick={() => {
                    if (!this.state.symbol) {
                        this.props.playerAction(this.props.count, 1);
                        this.handleSquareFill(this.props.currPlayer);
                        // console.log(this.state.symbol);
                        // ;
                    }
                }}
                id={this.props.id}
                className={this.props.className}
                title={`Square ${this.props.count}`}>
                    <i ref={this.symbol} className={`fa fa-${this.state.fontAwesome}`}></i>
                    {/* {this.state.symbol} */}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    currPlayer: state.game.playerOneActive,
    numSymbol: state.game.symbolCount,
    currentGame: state.game.currentGame
  })
  
  export default connect(
    mapStateToProps,
    {
        playerAction,
        updateGameState,
        handleGameWinner
    }
  )(Square);