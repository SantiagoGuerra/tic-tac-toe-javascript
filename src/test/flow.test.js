import Flow from '../logic/flow';

test('Initialize', () => {
  const flow = new Flow();
  expect(flow.currentPlayerSymbol).toBe('X');
  expect(flow.winner).toBe(null);
});