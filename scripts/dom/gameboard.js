Array.from(gameboard.children).forEach( (box, index) => {
  box.addEventListener('click', e => {    
    if ( ! game.on_course ){
      //Shows 'error'
    }
    if(typeof game.board[index] === 'number' && game.winner == null && game.on_course){
      box.classList.add('box-check-' + game.flow);
      game.board[index] = game.flow;
      if (game.checkWin(game.board,game.flow)) {
        //let winner_name = "Pepito Honguito"
        //let loser_name = "Juan Perez"
        game.winner = game.flow
        game.on_course = false
        console.log('Winner Flow: ' + game.flow)
        console.log('Winner: ' + game.winner)
        //alert("Congratulations " + winner_name + ", you won over " + loser_name)
      }
      game.flow === 'X'? game.flow = 'O': game.flow = 'X';
      
    }
    console.log(game.board);

  })
})