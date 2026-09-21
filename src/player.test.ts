import { expect, it } from 'vitest';
import { Player } from './player.ts'

it('Player object exists', () => {
  expect(Player).toBeDefined();
});

// This would cover any player to start on square 1
it('1.1 A new game starts with Player 1 and Player 2 on Square 1', () => {
  const player = new Player();
  expect(player.square).toBe(1)
});