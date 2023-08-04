import { WINNER_COMBOS } from "./logic/constants";

export const checkWinnerFrom = (boardToCheck) => {
    for (const combo of WINNER_COMBOS) {
        const [a, b, c] = combo;
        if (boardToCheck[a] && boardToCheck[a] === boardToCheck[b] &&
            boardToCheck[b] === boardToCheck[c])
            return boardToCheck[a];
    }

    return null;
};