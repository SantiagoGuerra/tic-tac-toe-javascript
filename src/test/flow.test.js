import Flow from '../logic/flow';

test('Initialize', () => {
  const flow = new Flow();
  expect(flow.currentPlayerSymbol).toBe('X');
  expect(flow.winner).toBe(null);
  expect(flow.onCourse).toBe(false);
  expect(flow.player1).toBe('');
  expect(flow.player2).toBe('');
});
