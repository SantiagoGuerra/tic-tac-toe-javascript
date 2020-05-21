/* global flow */
/* eslint no-undef: "error" */
/* eslint no-unused-vars: */

const Board = (() => {
  const values = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const check = (inputValues, playerSymbol) => {
    const winArr = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 4, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [2, 4, 6]];
    if (winArr.some(
      (winVal) => winVal.every(
        (winPos) => inputValues[winPos] === playerSymbol,
      ),
    )
    ) {
      return playerSymbol;
    }
    return false;
  };
  return {
    values,
    check,
  };
});


export default Board;