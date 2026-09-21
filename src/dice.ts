import { randomInt } from "crypto";

export class Dice {

    roll(): number {
        return randomInt(1, 7);
    }
}
