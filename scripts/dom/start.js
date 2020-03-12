start.addEventListener('click', e => {
  game.player1_name = (input_player1.value === '') ? 'Anonymous 1' : input_player1.value;
  input_player1.classList.add('d-none');

  game.player2_name = (input_player2.value === '') ? 'Anonymous 2' : input_player2.value;
  input_player2.classList.add('d-none');

  // //Hide the message "please insert player names"
  showMessage('');

  start.classList.add('d-none'); // hides "Let's start button"

  // Shows player names in p tag
  player1_display_name.textContent = game.player1_name;
  player1_display_name.classList.remove('d-none');

  player2_display_name.textContent = game.player2_name;
  player2_display_name.classList.remove('d-none');


  new_game.classList.remove('d-none'); // shows new game button
  restart.classList.remove('d-none'); // shows restart button

  game.on_course = true;
  e.preventDefault();
});