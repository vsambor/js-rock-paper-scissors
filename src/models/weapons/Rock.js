import Weapon from "./Weapon.js";
import Scissors from "./Scissors.js";

export default class Rock extends Weapon {
  constructor() {
    super();
  }

  wins(weapon) {
    return weapon instanceof Scissors;
  }
}