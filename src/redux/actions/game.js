import { game } from "./types";

export const greeting = () => {
    // const message = msg;
    return {
        type: game.STARTGAME
    };
}

export const activePlayer = () => {
    return {
        type: game.CHANGEPLAYER
    }
}