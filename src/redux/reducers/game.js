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
                symbolCount: state.symbolCount + action.payload,
                playerOneActive: !state.playerOneActive
            };
        default:
            return state;
    }
}