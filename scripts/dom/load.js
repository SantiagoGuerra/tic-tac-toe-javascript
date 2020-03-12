import GameBoard from './gameboard'

const restart = document.querySelector('#restart');
const new_game = document.querySelector('#new-game');
const start = document.querySelector('#start-game');
const gameboard = document.querySelector('.gameboard');
const game = GameBoard();
const messages = document.querySelector('.messages');
const input_player1 = document.querySelector('#input-player1');
const input_player2 = document.querySelector('#input-player2');
const player1_display_name = document.querySelector('#player1-name');
const player2_display_name = document.querySelector('#player2-name');

const showMessage = message => {
  messages.innerHTML = `<p>${message}</p>`;
};

showMessage('Please insert player names');


document.querySelector('#input-player1').value = '';
document.querySelector('#input-player2').value = '';
