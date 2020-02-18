export default class HumanPlayer extends Player {
  constructor(weapons, score) {
    super(weapons, score);
  }

  choose() {
    return this.weapons[0];
  }
}