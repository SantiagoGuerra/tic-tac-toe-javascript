new_game.addEventListener('click', e => {
  restart.dispatchEvent(new Event('click'));
  game.on_course = false;

  showMessage('Insert player names');
  restart.classList.add('d-none');
  new_game.classList.add('d-none');
  start.classList.remove('d-none');

  player1_display_name.classList.add('d-none');
  player2_display_name.classList.add('d-none');


  input_player1.classList.remove('d-none');
  input_player1.value = '';
  game.player1_name = '';

  input_player2.classList.remove('d-none');
  input_player2.value = '';
  game.player2_name = '';


  // erase player names on the gameboard
  // erase player names on the dom -> objects
  // show text input
});