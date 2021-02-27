import Bowman from '../bowman';

test('damage', () => {
  const recieved = new Bowman('Vova', 'Bowman');
  recieved.damage(20);
  expect(recieved).toEqual({
    type: 'Bowman',
    name: 'Vova',
    health: 85,
    level: 1,
    attack: 25,
    defence: 25,
  });
});

test('levelUp', () => {
  const recieved = new Bowman('Vova', 'Bowman');
  recieved.damage(20);
  recieved.levelUp();
  expect(recieved).toEqual({
    type: 'Bowman',
    name: 'Vova',
    health: 100,
    level: 2,
    attack: 30,
    defence: 30,
  });
});
