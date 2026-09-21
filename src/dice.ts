import { randomInt } from "crypto";

export class Dice {

    /**
     * Dice roll
     * @returns Random number 
     */
    roll(): number {
        return randomInt(1, 7);
    }
}
