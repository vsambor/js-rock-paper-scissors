import Player from "../models/Player.js";

export default class ComputerPlayer extends Player {
  constructor() {
    super();
  }

  choose(weapons) {
    const randomIndex = Math.floor(Math.random() * (weapons.length));
    this.choice = weapons[randomIndex];

    return this.choice;
  }
}
