import { restart, gameboardDOM } from './selectors';
import showMessage from './load';
import { flow, board } from '../logic/main';


restart.addEventListener('click', e => {
  showMessage('');
  Array.from(gameboardDOM.children).forEach((box) => {
    box.classList.remove('box-check-O');
    box.classList.remove('box-check-X');
  });

  flow.winner = null;
  board.values = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  flow.currentPlayerSymbol = 'X';
  flow.winner = null;
  flow.onCourse = true;

  e.preventDefault();
});