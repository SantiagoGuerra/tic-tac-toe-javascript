Array.from(gameboard.children).forEach( (box, index) => {
  box.addEventListener('click', e => {    
    
    if(typeof game.board[index] === 'number' && game.winner == null && game.on_course){
      box.classList.add('box-check-' + game.flow);
      game.board[index] = game.flow;
      let winnerSymbol = game.checkWin(game.board,game.flow)
      if (winnerSymbol) {
        let winner_name = (winnerSymbol === 'X') ? game.player1_name : game.player2_name
        game.winner = game.flow
        game.on_course = false
        showMessage(`Congratulations ${winner_name}  you won`)
      }
      game.flow === 'X'? game.flow = 'O': game.flow = 'X';
      
    }

    if(game.board.every(cell => typeof cell === 'string') && !game.winner) {
      showMessage('Nobody wins')
    }

    if ( !game.on_course && !game.winner){
      showMessage('You need to fill name inputs in order to play.')
    }

  })
})