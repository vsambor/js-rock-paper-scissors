import { Weapon } from "./Weapon";
import { ROCK_TYPE, SCISSORS_TYPE } from '../../utils/constants.js';

export default class Rock extends Weapon {
  constructor() {
    super(ROCK_TYPE);
  }

  wins(weapon) {
    return weapon.type === SCISSORS_TYPE;
  }
}