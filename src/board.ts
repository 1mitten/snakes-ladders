export class Board {
  readonly size: number;

  /**
   * Creates a new Board instance with the specified size.
   * @param size Size of the board, default 100
   */
  constructor(size = 100) {
    this.size = size;
  }

  /**
   * Returns the final square of the board.
   * @returns The final square
   */
  get finalSquare(): number {
    return this.size;
  }
  /**
   * Determines the final square after a move, taking into account bouncing back if the move exceeds the board size.
   * @param square The current square
   * @param roll The dice roll
   * @returns The final bounce back value where you land
   */
  validateMove(square: number, roll: number): number {
    const bounce_square = square + roll;
    return bounce_square > this.size
      ? 2 * this.size - bounce_square
      : bounce_square;
  }
}
