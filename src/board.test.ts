import { expect, it } from 'vitest';
import { Board } from './board.ts';

it('Board object exists', () => {
  expect(Board).toBeDefined();
});

it('Board is 100 squares', () => {
  const board = new Board();
  expect(board.size).toBe(100)
});