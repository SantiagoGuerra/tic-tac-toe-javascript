const GameBoard = () => {
  let board = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let flow = "X"
  let winner = null
  let on_course = false
  let player1_name = null
  let player2_name = null

  const checkWin = (board,player_symbol) => {
    const winArr = [[0,1,2],[3,4,5],[6,7,8],[0,4,8],[0,3,6],[1,4,7],[2,5,8],[2,4,6]];
    console.log("jugador: " + player_symbol)
    if (winArr.some(
        (winVal) => {
          return winVal.every(
            (winPos) => {            
              return board[winPos] === player_symbol
            }
        )
      }
      ) 
    ){
      return player_symbol
    }else{
      return false
    }
  }

  const startGame = (player1_name, player2_name) => {
    this.player1_name = player1_name;
    this.player2_name = player2_name;
    this.on_course = true
  }

  


  return {
    board, flow, checkWin, winner, startGame, player2_name, player1_name
  }
}