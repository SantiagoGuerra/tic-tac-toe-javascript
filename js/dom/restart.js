/* global
  board,
  flow,
  showMessage,
  restart,
  gameboardDOM */
/* eslint no-undef: "error" */

restart.addEventListener('click', e => {
  showMessage('');
  Array.from(gameboardDOM.children).forEach((box) => {
    box.classList.remove('box-check-O');
    box.classList.remove('box-check-X');
  });

  // <improvement> Inside flow.restart()
  flow.winner = null;
  board.values = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  flow.currentPlayerSymbol = 'X';
  flow.winner = null;
  flow.onCourse = true;
  // </improvement>

  e.preventDefault();
});