import { Board } from "./board.ts";
import { Dice } from "./dice.ts";
import { Player } from "./player.ts";

export class Game {
    readonly board: Board;
    readonly dice: Dice;
    readonly players: readonly [Player,Player]

    constructor(board: Board = new Board(), dice: Dice = new Dice){
        this.dice = dice;
        this.board = board;
        this.players = [new Player(), new Player()]
    }
}