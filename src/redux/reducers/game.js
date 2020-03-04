import { game } from "../actions/types";

const INITIAL_STATE = {
    message: "Hello World"
}

export default function gameReducer(state = INITIAL_STATE, action) {
    switch(action.type) {
        case game.STARTGAME:
            console.log(state.message);
        default:
            return state;
    }
}