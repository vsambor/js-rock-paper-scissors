import Player from "../models/Player.js";
import { getRandomItemFromArray } from "../utils/random.js";

export default class ComputerPlayer extends Player {
  constructor() {
    super();
  }

  choose(weapons) {
    // Not sure if I should use: https://bost.ocks.org/mike/shuffle/ ??
    this.choice = getRandomItemFromArray(weapons);

    return this.choice;
  }
}
