/* global
  game,
  showMessage,
  restart,
  gameboard */
/* eslint no-undef: "error" */

restart.addEventListener('click', e => {
  game.board = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  game.flow = 'X';
  game.winner = null;
  showMessage('');
  Array.from(gameboard.children).forEach((box) => {
    box.classList.remove('box-check-O');
    box.classList.remove('box-check-X');
  });
  game.onCourse = true;
  e.preventDefault();
});