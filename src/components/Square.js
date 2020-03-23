import React, { Component } from "react";

class Square extends Component {

    // componentDidMount() {
    //     console.log(this.props.id);
    // }

    render() {
        return (
            <div 
                onClick={() => this.props.handlePlayerSelect(this.props.count)}
                id={this.props.id}
                className={this.props.className}
                title={`Square ${this.props.count}`}>
            </div>
        )
    }
}

export default Square;