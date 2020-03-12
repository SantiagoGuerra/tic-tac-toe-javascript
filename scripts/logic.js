/* eslint no-unused-vars: 2 */
/* global GameBoard */

const GameBoard = () => {
  const board = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const flow = 'X';
  const winner = null;
  const onCourse = false;
  const player1Name = null;
  const player2Name = null;

  const checkWin = (board, playerSymbol) => {
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
        (winPos) => board[winPos] === playerSymbol,
      ),
    )
    ) {
      return playerSymbol;
    }
    return false;
  };

  const startGame = (player1Name, player2Name) => {
    this.player1Name = player1Name;
    this.player2Name = player2Name;
    this.onCourse = true;
  };


  return {
    board, flow, checkWin, winner, startGame, player2Name, player1Name, onCourse,
  };
};
