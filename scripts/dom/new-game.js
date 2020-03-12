newGame.addEventListener('click', e => {
  restart.dispatchEvent(new Event('click'));
  game.onCourse = false;

  showMessage('Insert player names');
  restart.classList.add('d-none');
  newGame.classList.add('d-none');
  start.classList.remove('d-none');

  player1DisplayName.classList.add('d-none');
  player2DisplayName.classList.add('d-none');


  inputPlayer1.classList.remove('d-none');
  inputPlayer1.value = '';
  game.player1Name = '';

  inputPlayer2.classList.remove('d-none');
  inputPlayer2.value = '';
  game.player2Name = '';
  e.preventDefault()
});