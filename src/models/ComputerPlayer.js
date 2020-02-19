import Player from "../models/Player.js";

export default class ComputerPlayer extends Player {
  constructor(choice, score) {
    super(choice, score);
  }

  choose(weapons) {
    const randomIndex = Math.floor(Math.random() * (weapons.length));
    this.choice = weapons[randomIndex];

    return this.choice;
  }

  setScore(score) {
    this.score = score;
  }
}