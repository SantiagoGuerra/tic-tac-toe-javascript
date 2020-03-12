restart.addEventListener('click', e => {
  game.board = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  game.flow = 'X';
  game.winner = null
  showMessage('')
  Array.from(gameboard.children).forEach( (box, index) => {
    box.classList.remove('box-check-O')
    box.classList.remove('box-check-X')
  })
  game.on_course = true;
  console.log(game.board)

})