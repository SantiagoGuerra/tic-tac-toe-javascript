import { messages, inputPlayer1, inputPlayer2 } from './selectors';

const showMessage = message => {
  messages.innerHTML = `<p>${message}</p>`;
};

showMessage('Please insert player names');

inputPlayer1.value = '';
inputPlayer2.value = '';

export default showMessage;