start.addEventListener('click', e => {
  game.player1Name = (inputPlayer1.value === '') ? 'Anonymous 1' : inputPlayer1.value;
  inputPlayer1.classList.add('d-none');

  game.player2Name = (inputPlayer2.value === '') ? 'Anonymous 2' : inputPlayer2.value;
  inputPlayer2.classList.add('d-none');

  // //Hide the message "please insert player names"
  showMessage('');

  start.classList.add('d-none'); // hides "Let's start button"

  // Shows player names in p tag
  player1DisplayName.textContent = game.player1Name;
  player1DisplayName.classList.remove('d-none');

  player2DisplayName.textContent = game.player2Name;
  player2DisplayName.classList.remove('d-none');


  newGame.classList.remove('d-none'); // shows new game button
  restart.classList.remove('d-none'); // shows restart button

  game.onCourse = true;
  e.preventDefault();
});