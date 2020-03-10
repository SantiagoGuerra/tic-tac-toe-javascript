//dom manipulation logic

const game = GameBoard()
const gameboard = document.querySelector('.gameboard');
const restart = document.querySelector('#restart')

function blockBoard(gameboard) {
  Array.from(gameboard.children).forEach( (box, index) => {
    box.addEventListener('click', e => {
      
    })
  })
}



Array.from(gameboard.children).forEach( (box, index) => {
  box.addEventListener('click', e => {
    box.classList.add('box-check')
    game.board[index] = 'X'
    console.log(game.board)
  })
})

restart.addEventListener('click', e => {
  game.board = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  Array.from(gameboard.children).forEach( (box, index) => {
    box.classList.remove('box-check')
  })
  console.log(game.board)

})