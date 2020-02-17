import { Weapon } from "./Weapon";
import { SCISSORS_TYPE, PAPER_TYPE } from '../../utils/constants.js';

export default class Scissors extends Weapon {
  constructor() {
    super(SCISSORS_TYPE);
  }

  wins(weapon) {
    return weapon.type === PAPER_TYPE;
  }
}