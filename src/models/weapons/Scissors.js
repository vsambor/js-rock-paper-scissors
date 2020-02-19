import Weapon from "./Weapon.js";
import Paper from "./Paper.js";

export default class Scissors extends Weapon {
  constructor() {
    super();
  }

  wins(weapon) {
    return weapon instanceof Paper;
  }
}