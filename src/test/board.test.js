import Board from '../logic/board';

test('sample', () => {
  const board = new Board();
  expect(
    board.values,
  ).toStrictEqual(
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
  );
});