import Player from "../models/Player.js";

export default class HumanPlayer extends Player {
  constructor(choice, score) {
    super(choice, score);
  }

  choose(weapons) {
    return this.choice;
  }

  setChoice(weapon) {
    this.choice = weapon;
  }

  setScore(score) {
    this.score = score;
  }
}