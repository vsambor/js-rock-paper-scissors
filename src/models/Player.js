export default class Player {
  constructor() {
    this.score = 0;
    this.choice = null;
  }

  reset() {
    this.score = 0;
  }

  won() {
    this.score = this.score + 1;
  }
}