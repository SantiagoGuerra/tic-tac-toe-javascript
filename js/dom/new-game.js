/* global
  showMessage,
  newGame,
  restart,
  start,
  flow,
  inputPlayer1,
  inputPlayer2,
  player1DisplayName,
  player2DisplayName
  */
/* eslint no-undef: "error" */

newGame.addEventListener('click', e => {
  restart.dispatchEvent(new Event('click'));
  flow.onCourse = false;

  showMessage('Insert player names');
  restart.classList.add('d-none');
  newGame.classList.add('d-none');
  start.classList.remove('d-none');

  player1DisplayName.classList.add('d-none');
  player2DisplayName.classList.add('d-none');


  inputPlayer1.classList.remove('d-none');
  inputPlayer1.value = '';
  flow.player1.name = '';

  inputPlayer2.classList.remove('d-none');
  inputPlayer2.value = '';
  flow.player2.name = '';
  e.preventDefault();
});