import Board from '../logic/board';

test('sample', () => {
  const board = new Board();
  expect(
    board.values,
  ).toStrictEqual(
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
  );
});

test('Player 1 wins', () => {
  const board = new Board();
  board.values = ['X', 'X', 'X', 4, 5, 6, 7, 8, 9];
  expect(
    board.check(board.values, 'X'),
  ).toStrictEqual('X');
});

test('Player 2 wins', () => {
  const board = new Board();
  board.values = ['O', 'O', 'O', 4, 5, 6, 7, 8, 9];
  expect(
    board.check(board.values, 'O'),
  ).toStrictEqual('O');
});

test('Draw', () => {
  const board = new Board();
  board.values = ['X', 'O', 'X', 'X', 'O', 'O', 'O', 'X', 'X'];
  expect(
    board.check(board.values, 'O'),
  ).toStrictEqual(false);
  expect(
    board.check(board.values, 'X'),
  ).toStrictEqual(false);

});

test('Nobody wins yet', () => {
  const board = new Board();
  board.values = ['O', 'X', 'O', 4, 5, 6, 7, 8, 9];
  expect(
    board.check(board.values, 'O'),
  ).toStrictEqual(false);
  expect(
    board.check(board.values, 'X'),
  ).toStrictEqual(false);
});