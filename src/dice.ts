import { randomInt } from "crypto";

export class Dice {
  /**
   *  Rolls the dice and returns a random integer between 1 and 6 (inclusive).
   * @returns A random integer between 1 and 6 (inclusive)
   */
  roll(): number {
    return randomInt(1, 7);
  }
}
