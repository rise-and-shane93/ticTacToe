import { game } from "./types";

export const greeting = () => {
    // const message = msg;
    return {
        type: game.STARTGAME
    };
}

export const playerAction = (squareNum, count, symbol, index, row) => dispatch => {
    dispatch({
        type: game.CHANGEPLAYER,
        payload: count
    });
}

export const updateGameState = (symbol, index, row) => dispatch => {
    dispatch({
        type: game.UPDATEGAMESTATE,
        payload: {
            symbol,
            index,
            row
        }
    });
}