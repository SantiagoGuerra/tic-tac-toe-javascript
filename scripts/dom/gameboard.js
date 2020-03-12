Array.from(gameboard.children).forEach((box, index) => {
  box.addEventListener('click', e => {
    if (typeof game.board[index] === 'number' && game.winner == null && game.onCourse) {
      box.classList.add(`box-check-${game.flow}`);
      game.board[index] = game.flow;
      const winnerSymbol = game.checkWin(game.board, game.flow);
      if (winnerSymbol) {
        const winnerName = (winnerSymbol === 'X') ? game.player1Name : game.player2Name;
        game.winner = game.flow;
        game.onCourse = false;
        showMessage(`Congratulations ${winnerName}  you won`);
      }
      game.flow = game.flow === 'X' ? 'O' : 'X';
    }

    if (game.board.every(cell => typeof cell === 'string') && !game.winner) {
      showMessage('Nobody wins');
    }

    if (!game.onCourse && !game.winner) {
      showMessage('You need to fill name inputs in order to play.');
    }

    e.preventDefault();
  });
});