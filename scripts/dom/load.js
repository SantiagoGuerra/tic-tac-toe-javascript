const restart = document.querySelector('#restart');
const newGame = document.querySelector('#new-game');
const start = document.querySelector('#start-game');
const gameboard = document.querySelector('.gameboard');
const game = GameBoard();
const messages = document.querySelector('.messages');
const inputPlayer1 = document.querySelector('#input-player1');
const inputPlayer2 = document.querySelector('#input-player2');
const player1DisplayName = document.querySelector('#player1-name');
const player2DisplayName = document.querySelector('#player2-name');

const showMessage = message => {
  messages.innerHTML = `<p>${message}</p>`;
};

showMessage('Please insert player names');


document.querySelector('#input-player1').value = '';
document.querySelector('#input-player2').value = '';
