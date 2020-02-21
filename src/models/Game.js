import RockWeapon from "./weapons/Rock.js";
import PaperWeapon from "./weapons/Paper.js";
import ScissorsWeapon from "./weapons/Scissors.js";
import {
  PLAYER_1_WON_RESULT,
  PLAYER_2_WON_RESULT
} from "../utils/constants.js";


export default class Game {
  constructor(player1, player2) {
    this.player1 = player1;
    this.player2 = player2;

    this.weapons = [
      new RockWeapon(),
      new PaperWeapon(),
      new ScissorsWeapon()
    ]

    this.numberRounds = 0;
  }

  play() {
    this.numberRounds++;

    const player1SelectedWeapon = this.player1.choose(this.weapons);
    const player2SelectedWeapon = this.player2.choose(this.weapons);
    const roundResult = player1SelectedWeapon.fightWith(player2SelectedWeapon);

    this._interpretResult(roundResult);

    return roundResult;
  }

  _interpretResult(result) {
    if (result === PLAYER_1_WON_RESULT) {
      this.player1.won();
    }
    else if (result === PLAYER_2_WON_RESULT) {
      this.player2.won();
    }
    else {
      // DRAW
    }
  }

  reset() {
    this.numberRounds = 0;
    this.player1.reset();
    this.player2.reset();
  }
}