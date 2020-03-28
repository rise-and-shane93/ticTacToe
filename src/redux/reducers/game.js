import { game } from "../actions/types";

const INITIAL_STATE = {
    message: "Hello World",
    playerOneScore: 0,
    playerTwoScore: 0,
    symbolCount: 0,
    playerOneActive: true,
    currentWinner: "",
    currentGame: [[null, null, null],
                  [null, null, null],
                  [null, null, null]]
}

export default function gameReducer(state = INITIAL_STATE, action) {
    switch(action.type) {
        case game.STARTGAME:
            console.log(state.message);
            return state;
        case game.CHANGEPLAYER:
            return {
                ...state,
                symbolCount: state.symbolCount + action.payload.count,
                playerOneActive: !state.playerOneActive
            };
        case game.UPDATEGAMESTATE:
            return {
                ...state,
                currentGame: state.currentGame.map(
                    (el, i) => {
                        if (i === action.payload.row) {
                            let row = state.currentGame[action.payload.row];
                            row[action.payload.index] = action.payload.symbol;
                            return row;
                        } else {
                            return el;
                        }
                    }
                )
            }
        case game.PLAYERWINS:
            let currGameArr = state.currentGame;
            let winner = "";
            let incScore = 0;
            currGameArr.forEach((el,i, arr) => {

                // Check if any rows have the same symbols
                if (el.every((el,i) => el === "X")) {
                    winner = "Player 1";
                    incScore = 1;
                } else if (el.every((el,i) => el === "O")) {
                    winner = "Player 2";
                    incScore = 1;
                }
            });
            
            // Check if any columns have the same symbols
            for (let h = 0; h < 3; h++) {
                let column = currGameArr.map(x => x[h]);
                column.forEach((el, i) => {
                    if (column.every((el,i) => el === "X")) {
                        winner = "Player 1";
                        incScore = 1;
                    } else if (column.every((el,i) => el === "O")) {
                        winner = "Player 2";
                        incScore = 1;
                    }
                });
            }

            // Check if any diagonals have the same symbols
            let diagonal1 = currGameArr.map((el,i) => {
                return el[i];
            });

            if (diagonal1.every((el,i) => el === "X")) {
                winner = "Player 1";
                incScore = 1;
            } else if (diagonal1.every((el,i) => el === "O")) {
                winner = "Player 2";
                incScore = 1;
            }
            
            let reversedArray = currGameArr.slice(0).reverse().map((el,i) => {
                return el[i];
            });
            
            if (reversedArray.every((el,i) => el === "X")) {
                winner = "Player 1";
                incScore = 1;
            } else if (reversedArray.every((el,i) => el === "O")) {
                winner = "Player 2";
                incScore = 1;
            }

            
            if (winner !== "" && incScore !== 0) {
                if (winner === "Player 1") {
                    return {
                        ...state,
                        currentWinner: winner,
                        playerOneScore: state.playerOneScore + incScore
                    }
                } else {
                    return {
                        ...state,
                        currentWinner: winner,
                        playerTwoScore: state.playerTwoScore + incScore
                    }
                }
                
            }
            // break;
        case game.RESETGAME:
            const { symbolCount, playerOneActive, currentWinner, currentGame } = action.payload;
            console.log("reset game reducer", action.payload.symbolCount);
            // return {
            //     ...state,
            //     symbolCount,
            //     playerOneActive,
            //     currentWinner,
            //     currentGame
            // }
        default:
            return state;
    }
}

