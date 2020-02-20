import Weapon from "./Weapon.js";
import {
  PLAYER_1_WON_RESULT,
  PLAYER_2_WON_RESULT,
  DRAW_RESULT
} from "../../utils/constants.js";

export default class Paper extends Weapon {
  constructor() {
    super();

    this.fightResultMap = {
      Paper: DRAW_RESULT,
      Rock: PLAYER_1_WON_RESULT,
      Scissors: PLAYER_2_WON_RESULT
    }
  }

  fightWith(weapon) {
    return this.fightResultMap[weapon.constructor.name];
  }
}