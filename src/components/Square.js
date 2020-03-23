import React, { Component } from "react";

class Square extends Component {

    // componentDidMount() {
    //     console.log(this.props.id);
    // }

    render() {
        return (
            <p>Square {this.props.id}</p>
        )
    }
}

export default Square;