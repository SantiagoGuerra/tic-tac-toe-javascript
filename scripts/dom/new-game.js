new_game.addEventListener('click', e => {
  restart.dispatchEvent(new Event('click'))
  restart.classList.add('d-none')
  new_game.classList.add('d-none')
  start.classList.remove('d-none')

  player1_display_name = document.querySelector('#player1-name')
  game.player1_name = player1_display_name.textContent = null
  player1_display_name.classList.add('d-none')

  player2_display_name = document.querySelector('#player2-name')
  game.player2_name = player2_display_name.textContent = null
  player2_display_name.classList.add('d-none')

  let input_player1 = document.querySelector('#input-player1');
  input_player1.classList.remove('d-none')
  input_player1.value = ""

  let input_player2 = document.querySelector('#input-player2'); 
  input_player2.classList.remove('d-none')
  input_player2.value = ""


  //erase player names on the gameboard
  //erase player names on the dom -> objects
  //show text input
})