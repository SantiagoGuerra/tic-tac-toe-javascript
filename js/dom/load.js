/* global
 GameBoard,
 Flow,
 Player,
 restart,
 Board,
 inputPlayer1,
 inputPlayer2,
 messages */
/* eslint no-undef: "error" */
/* eslint no-unused-vars: */

const showMessage = message => {
  messages.innerHTML = `<p>${message}</p>`;
};

showMessage('Please insert player names');

inputPlayer1.value = '';
inputPlayer2.value = '';

console.log(board.values)
console.log("current "+flow.currentPlayerSymbol)
console.log("onCourse "+flow.onCourse)
console.log("winner "+flow.winner)
