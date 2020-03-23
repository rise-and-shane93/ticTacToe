import React, { Component } from "react";

class Player extends Component {
    render() {
        return (
            <>
            <h2>Player {this.props.num}</h2>
            <p>Score:</p>
            </>
        );
    }
}

export default Player;