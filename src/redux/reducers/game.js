import { game } from "../actions/types";

const INITIAL_STATE = {
    message: "Hello World",
    playerOneScore: 0,
    playerTwoScore: 0,
    symbolCount: 0,
    playerOneActive: true,
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
            currGameArr.forEach((el,i) => {
                // el.every((el,i) => {
                //     if (el === "X") {
                //         console.log(el);
                //         console.log("player 1 wins");
                //     } else if (el === "O") {
                //         console.log("player 2 wins");
                //     }
                // })
                if (el.every((el,i) => el === "X")) {
                    console.log("player 1 wins");
                } else if (el.every((el,i) => el === "O")) {
                    console.log("player 2 wins");
                }
            });
        default:
            return state;
    }
}

