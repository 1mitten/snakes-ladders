export class Player {
  square: number = 1;

  /**
   * Moves the player to the specified square.
 * @param square 
 */
  move(square: number): void {
    this.square = square;
  }
}
