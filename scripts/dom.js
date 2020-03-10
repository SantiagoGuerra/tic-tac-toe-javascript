//dom manipulation logic

const game = GameBoard()
const gameboard = document.querySelector('.gameboard');
const restart = document.querySelector('#restart')

Array.from(gameboard.children).forEach( (box, index) => {
  box.addEventListener('click', e => {
  
    if(typeof game.board[index] === 'number' && game.winner == null){
      box.classList.add('box-check-' + game.flow);
      game.board[index] = game.flow;
      if (game.checkWin(game.board,game.flow)) {
        game.winner = game.flow
        console.log('Winner Flow: ' + game.flow)
        console.log('Winner: ' + game.winner)
      }
      game.flow === 'X'? game.flow = 'O': game.flow = 'X';
      
    }
    console.log(game.board);

  })
})

restart.addEventListener('click', e => {
  game.board = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  game.flow = 'X';
  Array.from(gameboard.children).forEach( (box, index) => {
    box.classList.remove('box-check-O')
    box.classList.remove('box-check-X')
  })
  
  console.log(game.board)

})

