import Weapon from "./Weapon.js";
import Rock from "./Rock.js";

export default class Paper extends Weapon {
  constructor() {
    super();
  }

  wins(weapon) {
    return weapon instanceof Rock;
  }
}