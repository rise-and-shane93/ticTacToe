import React, { Component } from "react";

import { playerAction } from "../../src/redux/actions/game";
import { connect } from 'react-redux';

class Player extends Component {

    componentDidMount() {
        // const active = () => {
        //     if ((this.props.currPlayer && this.props.num === 1) || (!this.props.currPlayer && this.props.num === 2)) {
        //         return "active-player";
        //     }
        // };
        // active();
        // console.log(active, this.props.num);
    }

    render() {
        const active = () => {
            if ((this.props.currPlayer && this.props.num === 1) || (!this.props.currPlayer && this.props.num === 2)) {
                return "active-player";
            } else {
                return "";
            }
        };
        return (
            <div className={`player ${active()}`}>
                <h2>Player {this.props.num}</h2>
                <p>Score:</p>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    currPlayer: state.game.playerOneActive
  })
  
  export default connect(
    mapStateToProps,
    {
        playerAction
    }
  )(Player);