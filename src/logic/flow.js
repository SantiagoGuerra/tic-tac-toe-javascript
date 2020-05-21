import { restart } from '../dom/selectors';

const Flow = (() => {
  const currentPlayerSymbol = 'X';
  const winner = null;
  const onCourse = false;
  const player1 = '';
  const player2 = '';

  return {
    currentPlayerSymbol,
    winner,
    onCourse,
    player1,
    player2,
    restart,
  };
});

export default Flow;