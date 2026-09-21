import { expect, it, vi } from "vitest";
import { Game } from "./game.ts";
import { generatePrimeSync } from "crypto";

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

it("Given Player 1 is on Square 97, when they roll a 3, they land on Square 100 and Player 1 wins", () => {
  const game = new Game({
    roll: vi.fn().mockReturnValueOnce(3),
  });

  game.players[0].square = 97;
  expect(game.players[0].square).toBe(97);
  game.takeTurn();
  expect(game.players[0].square).toBe(100);
  expect(game.state).toEqual("WON");
});

it("2.2 Given Player 1 is on Square 97, when they roll a 4, they bounce back to Square 99", () => {
  const game = new Game({
    roll: vi.fn().mockReturnValueOnce(4),
  });

  game.players[0].square = 97;
  game.takeTurn();
  expect(game.players[0].square).toBe(99);
});


it("2.3 Given a player has won, further turns are ignored", () => {
  const game = new Game({
    roll: vi.fn().mockReturnValueOnce(4),
  });

  game.players[0].square = 96;
  game.takeTurn();
  expect(game.players[0].square).toBe(100);
  expect(game.state).toEqual("WON")
  game.takeTurn();
  expect(game.players[0].square).toBe(100);
  expect(game.state).toBe("WON")
});



