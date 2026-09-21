import { Board } from "./board.ts";
import { Dice } from "./dice.ts";
import { Player } from "./player.ts";

export class Game {
    readonly board: Board;
    readonly dice: Dice;
    readonly players: readonly [Player,Player]

    constructor(dice: Dice = new Dice, board: Board = new Board()){
        this.dice = dice;
        this.board = board;
        this.players = [new Player(), new Player()]
    }


    takeTurn(): void {
        this.players[0].move(this.players[0].square + this.dice.roll());
    }
}