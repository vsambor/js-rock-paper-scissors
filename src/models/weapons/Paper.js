import { Weapon } from "./Weapon";
import { PAPER_TYPE, ROCK_TYPE } from '../../utils/constants.js';

export default class Paper extends Weapon {
  constructor() {
    super(PAPER_TYPE);
  }

  wins(weapon) {
    return weapon.type === ROCK_TYPE;
  }
}