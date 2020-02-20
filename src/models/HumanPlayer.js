import Player from "../models/Player.js";

export default class HumanPlayer extends Player {
  constructor() {
    super();
  }

  choose(weapons) {
    return this.choice;
  }

  setChoice(weapon) {
    this.choice = weapon;
  }
}