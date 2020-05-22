import {
  start, inputPlayer1, inputPlayer2, player1DisplayName, player2DisplayName, newGame, restart,
} from './selectors';
import { flow } from '../logic/main';
import showMessage from './load';
import Player from '../logic/player';


start.addEventListener('click', e => {
  flow.player1 = Player((inputPlayer1.value === '') ? 'Anonymous 1' : inputPlayer1.value);
  inputPlayer1.classList.add('d-none');

  flow.player2 = Player((inputPlayer2.value === '') ? 'Anonymous 2' : inputPlayer2.value);
  inputPlayer2.classList.add('d-none');

  showMessage('');

  start.classList.add('d-none');

  player1DisplayName.textContent = flow.player1.name;
  player1DisplayName.classList.remove('d-none');

  player2DisplayName.textContent = flow.player2.name;
  player2DisplayName.classList.remove('d-none');


  newGame.classList.remove('d-none');
  restart.classList.remove('d-none');

  flow.onCourse = true;
  e.preventDefault();
});