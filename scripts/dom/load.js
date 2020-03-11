
const restart = document.querySelector('#restart')
const new_game = document.querySelector('#new-game')
const start = document.querySelector("#start-game")
const gameboard = document.querySelector('.gameboard');


document.querySelector('#input-player1').value = ""
document.querySelector('#input-player2').value = ""

const game = GameBoard()

document.addEventListener('load', e =>  {
  console.log("Load")
  //clean the player names fields
  
  console.dir(player1_display_name)
  
  
  //hide the player name p tags
  e.preventDefault()
})