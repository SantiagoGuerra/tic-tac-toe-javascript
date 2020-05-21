import Player from '../logic/player';

test('Player Name', () => {
  expect(
    new Player('Pepe'),
  ).toStrictEqual({ name: 'Pepe' });
});