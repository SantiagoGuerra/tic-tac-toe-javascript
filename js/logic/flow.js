/* eslint-disable no-unused-vars */
/* global
  Player */

const Flow = (() => {
  const currentPlayerSymbol = 'X';
  const winner = null;
  let onCourse = false;
  let player1 = '';
  let player2 = '';

  const start = (player1Name, player2Name) => {
    onCourse = true;
    player1 = Player(player1Name);
    player2 = Player(player2Name);
  };

  return {
    currentPlayerSymbol,
    winner,
    onCourse,
    player1,
    player2,
    start,
    restart,
  };
});