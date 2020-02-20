import Weapon from "./Weapon.js";
import {
  PLAYER_1_WON_RESULT,
  PLAYER_2_WON_RESULT,
  DRAW_RESULT
} from "../../utils/constants.js";

export default class Rock extends Weapon {
  constructor() {
    super();

    this.fightResultMap = {
      Rock: DRAW_RESULT,
      Scissors: PLAYER_1_WON_RESULT,
      Paper: PLAYER_2_WON_RESULT
    }
  }

  fightWith(weapon) {
    return this.fightResultMap[weapon.constructor.name];
  }
}