import { Board } from "./board.ts";
import { Dice } from "./dice.ts";
import { Player } from "./player.ts";

export type GameState = "IN_PROGRESS" | "WON";

export class Game {
  readonly board: Board;
  readonly dice: Dice;
  readonly players: readonly [Player, Player];
  private gameState: GameState = "IN_PROGRESS";
  private currentPlayerIndex: 0 | 1 = 0;

  constructor(dice: Dice = new Dice(), board: Board = new Board()) {
    this.dice = dice;
    this.board = board;
    this.players = [new Player(), new Player()];
  }

  get state(): GameState {
    return this.gameState;
  }

  get currentPlayer(): Player {
    return this.players[this.currentPlayerIndex];
  }
  /**
   * Determinstic player turn
   * @returns Current Game State
   */
  takeTurn(): GameState {
    if (this.gameState === "WON") {
      return this.gameState;
    }
    this.currentPlayer.move(
      this.board.ValidateMove(this.currentPlayer.square, this.dice.roll()),
    );

    if (this.currentPlayer.square === this.board.finalSquare) {
      this.gameState = "WON";
    }

    this.currentPlayerIndex = this.currentPlayerIndex === 0 ? 1 : 0;

    return this.gameState;
  }
}
