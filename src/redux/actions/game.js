import { game } from "./types";

export const greeting = () => {
    // const message = msg;
    return {
        type: game.STARTGAME
    };
}

export const playerAction = (squareNum, count) => dispatch => {
    dispatch({
        type: game.CHANGEPLAYER,
        payload: count
    });
}