import React, { Component } from "react";

import { playerAction } from "../../src/redux/actions/game";
import { connect } from 'react-redux';

class Square extends Component {

    componentDidMount() {
        let row = 0;
        let index = 0;

        if (this.props.count % 3 === 0 && this.props.count <= 2) {
            index = 0;
            row = 0;
        } else if (this.props.count % 3 === 1  && (this.props.count >= 3 && this.props.count <= 5)) {
            index = 1;
            row = 1;
        } else {
            index = 2;
            row = 2
        }

        // if () {
        //     row = 0
        // }

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
            row: 0,
            index: 0
        }
    }

    handleSquareFill = (playerOneBool) => {
        if (playerOneBool) {
            this.setState({
                symbol: "times"
            });
        } else {
            this.setState({
                symbol: "circle-thin"
            });
        }
    }

    render() {
        
        return (
            <div
                ref={this.renderedWeatherData}
                onClick={() => {
                    if (!this.state.symbol) {
                        this.props.playerAction(this.props.count, 1);
                        this.handleSquareFill(this.props.currPlayer);    
                    }
                }}
                id={this.props.id}
                className={this.props.className}
                title={`Square ${this.props.count}`}>
                    <i ref={this.symbol} className={`fa fa-${this.state.symbol}`}></i>
                    {/* {this.state.symbol} */}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    currPlayer: state.game.playerOneActive,
    numSymbol: state.game.symbolCount
  })
  
  export default connect(
    mapStateToProps,
    {
        playerAction
    }
  )(Square);