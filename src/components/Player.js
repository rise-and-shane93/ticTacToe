import React, { Component } from "react";

class Player extends Component {
    render() {
        return (
            <div className="player">
                <h2>Player {this.props.num}</h2>
                <p>Score:</p>
            </div>
        );
    }
}

export default Player;