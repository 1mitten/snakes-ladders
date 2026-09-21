export class Board {
    readonly size: number;

    constructor(size = 100){
        this.size = size;
    }

    get finalSquare(): number {
        return this.size;
    }
}