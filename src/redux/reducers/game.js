import { game } from "../actions/types";

const INITIAL_STATE = {
    message: "Hello World",
    playerOneScore: 0,
    playerTwoScore: 0,
    symbolCount: 0,
    playerOneActive: true
}

export default function gameReducer(state = INITIAL_STATE, action) {
    switch(action.type) {
        case game.STARTGAME:
            console.log(state.message);
        // case game.CHANGEPLAYER:
        //     return state.playerOneActive;
        default:
            return state;
    }
}