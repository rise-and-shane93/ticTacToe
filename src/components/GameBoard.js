import React, { Component } from "react";

import Square from "./Square";

class GameBoard extends Component {

    componentDidMount() {
        this.createSquareElems();
    }

    componentWillUpdate() {
        console.log("update");
    }

    constructor(props) {
        super(props);
        this.state = {
            squareNum: 9,
            squareElems: []
        };
    }

    createSquareElems = () => {
        let divs = [];
        // outer loop to create parent
        for (let i = 0; i < this.state.squareNum; i++) {
            divs.push(<Square key={i} count={i} id={`Square-${i}`} className="game-square"/>);
        }
        return divs;
    }

    render() {
        return(
            <>
                <h1>Game board</h1>
                <article id="gameboard">
                    {/* {(() => {
                        for (let i = 0; i < this.state.squares; i++) {
                            console.log(i);
                            return <Square 
                                    key={i} 
                                    id={i}
                                    className="game-square"/>;
                        }
                    })()} */}
                    {/* {this.createSquareElems} */}
                    {this.createSquareElems()}
                </article>
            </>
        )
    }
}

export default GameBoard;