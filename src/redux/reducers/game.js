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
                        }
                    }
                )
            }
        default:
            return state;
    }
}