import { expect, it } from 'vitest';
import { Dice } from './dice.ts';

it('Dice object exists', () => {
  expect(Dice).toBeDefined();
});

it('Dice is can only roll from 1 to 6', () => {
  const dice = new Dice();

  for(let i = 0; i < 1000; i++){
    const roll = dice.roll()
    expect(roll).toBeGreaterThanOrEqual(1);
    expect(roll).toBeLessThanOrEqual(6)
  }
})