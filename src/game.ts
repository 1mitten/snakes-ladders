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

    /**
   * Creates a new Game instance with the specified dice and board.
   * @param dice The dice for the game, default is a new Dice instance
   * @param board The board for the game, default is a new Board instance
   */
  constructor(dice: Dice = new Dice(), board: Board = new Board()) {
    this.dice = dice;
    this.board = board;
    this.players = [new Player(), new Player()];
  }
  /**
   * Returns the current state of the game, which can be either "IN_PROGRESS" or "WON". If a player has reached the final square, the state will be "WON"; otherwise, it will remain "IN_PROGRESS".
   */
  get state(): GameState {
    return this.gameState;
  }
  /***
   * Returns the current player based on the currentPlayerIndex. If the index is 0, it returns Player 1; if it's 1, it returns Player 2.
   */
  get currentPlayer(): Player {
    return this.players[this.currentPlayerIndex];
  }
  /**
   * Determines the current game state after a player takes a turn. If the game has already been won, further turns are ignored. Otherwise, the current player rolls the dice and moves accordingly. If they reach the final square, the game state is updated to "WON". The turn then switches to the other player.
   * @returns Current Game State
   */
  takeTurn(): GameState {
    if (this.gameState === "WON") {
      return this.gameState;
    }
    this.currentPlayer.move(
      this.board.validateMove(this.currentPlayer.square, this.dice.roll()),
    );

    if (this.currentPlayer.square === this.board.finalSquare) {
      this.gameState = "WON";
    }

    this.currentPlayerIndex = this.currentPlayerIndex === 0 ? 1 : 0;

    return this.gameState;
  }
}
