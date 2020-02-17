import RockWeapon from "./weapons/Rock.js";
import PaperWeapon from "./weapons/Paper.js";
import ScissorsWeapon from "./weapons/Scissors.js";


export default class Game {
  constructor() {
    this.options = {
      1: RockWeapon,
      2: PaperWeapon,
      3: ScissorsWeapon
    }

    this.player1 = null;
    this.player2 = null;
  }

  setPlayer1(player1) {
    this.player1 = player1;
  }

  setPlayer2(player2) {
    this.player2 = player2;
  }

  play() {
    const player1Choise = this.player1.choose();
    const player2Choise = this.player2.choose();

    const gameResult = player1Choise.wins(player2Choise);

    console.log('Game Result: ', gameResult);
  }
}