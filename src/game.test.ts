import { expect, it, vi } from 'vitest';
import { Game } from './game.ts';

it('Game object exists', () => {
  expect(Game).toBeDefined();
});

it(' 1.2 Given Player 1 is on Square 1, when they roll a 4, they land on Square 5', () => {
  const game = new Game({
			roll: vi.fn().mockReturnValueOnce(4),
});

  expect(game.players[0].square).toBe(1);
  game.takeTurn();
  expect(game.players[0].square).toBe(5);
});

