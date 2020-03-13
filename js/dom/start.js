/* global
  flow,
  Player,
  showMessage, newGame,
  restart,
  start,
  player1DisplayName,
  player2DisplayName,
  inputPlayer1,
  inputPlayer2 */
/* eslint no-undef: "error" */

start.addEventListener('click', e => {
  flow.player1 = Player((inputPlayer1.value === '') ? 'Anonymous 1' : inputPlayer1.value);
  inputPlayer1.classList.add('d-none');

  flow.player2 = Player((inputPlayer2.value === '') ? 'Anonymous 2' : inputPlayer2.value);
  inputPlayer2.classList.add('d-none');

  // //Hide the message "please insert player names"
  showMessage('');

  start.classList.add('d-none'); // hides "Let's start button"

  // Shows player names in p tag
  player1DisplayName.textContent = flow.player1.name;
  player1DisplayName.classList.remove('d-none');

  player2DisplayName.textContent = flow.player2.name;
  player2DisplayName.classList.remove('d-none');


  newGame.classList.remove('d-none'); // shows new game button
  restart.classList.remove('d-none'); // shows restart button

  flow.onCourse = true;
  e.preventDefault();
});