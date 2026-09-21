import { expect, it, vi } from "vitest";
import { Game } from "./game.ts";

it("Game object exists", () => {
  expect(Game).toBeDefined();
});

it(" 1.2 Given Player 1 is on Square 1, when they roll a 4, they land on Square 5", () => {
  const game = new Game({
    roll: vi.fn().mockReturnValueOnce(4),
  });

  expect(game.players[0].square).toBe(1);
  game.takeTurn();
  expect(game.players[0].square).toBe(5);
});

it("1.3 Given Player 1 is on Square 1, when they roll a 3 and then a 4, they land on Square 8", () => {
  const game = new Game({
    roll: vi.fn().mockReturnValueOnce(3).mockReturnValueOnce(4),
  });

  expect(game.players[0].square).toBe(1);
  game.takeTurn();
  expect(game.players[0].square).toBe(4);
  game.takeTurn();
  expect(game.players[0].square).toBe(8);
});
