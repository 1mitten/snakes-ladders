export class Board {
    readonly size: number;

    /**
     * Board
     * @param size Size of the board, default 100
     */
    constructor(size = 100){
        this.size = size;
    }

    get finalSquare(): number {
        return this.size;
    }
    /**
     * 
     * @param square The current square
     * @param roll The dice roll
     * @returns The final bounce back value where you land
     */
    ValidateMove(square: number, roll: number): number {
		const bounce_square = square + roll;
		return bounce_square > this.size ? 2 * this.size - bounce_square : bounce_square;
	}
}