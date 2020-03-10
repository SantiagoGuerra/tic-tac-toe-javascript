const GameBoard = () => {
  let board = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let flow = "X"

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


  return {
    board, flow, checkWin
  }
}