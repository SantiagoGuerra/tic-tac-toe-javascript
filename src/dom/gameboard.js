import showMessage from './load';
import { gameboardDOM } from './selectors';
import { flow, board } from '../logic/main';

Array.from(gameboardDOM.children).forEach((box, index) => {
  box.addEventListener('click', e => {
    if (typeof board.values[index] === 'number' && flow.winner == null && flow.onCourse) {
      box.classList.add(`box-check-${flow.currentPlayerSymbol}`);
      board.values[index] = flow.currentPlayerSymbol;
      const winnerSymbol = board.check(board.values, flow.currentPlayerSymbol);
      if (winnerSymbol) {
        flow.winner = flow.currentPlayerSymbol;
        flow.onCourse = false;
        const winnerName = (winnerSymbol === 'X') ? flow.player1.name : flow.player2.name;
        showMessage(`Congratulations ${winnerName}  you won`);
      }

      flow.currentPlayerSymbol = flow.currentPlayerSymbol === 'X' ? 'O' : 'X';
    }

    if (board.values.every(cell => typeof cell === 'string') && !flow.winner) {
      showMessage('Nobody wins');
    }

    if (!flow.onCourse && !flow.winner) {
      showMessage('You need to fill name inputs in order to play.');
    }

    e.preventDefault();
  });
});