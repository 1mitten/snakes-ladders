export class Player {
  square: number = 1;

/**
 * Move a player to the designated square
 * @param square 
 */
  move(square: number): void {
    this.square = square;
  }
}
