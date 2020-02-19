import RockWeapon from "./weapons/Rock.js";
import PaperWeapon from "./weapons/Paper.js";
import ScissorsWeapon from "./weapons/Scissors.js";


export default class Game {
  constructor(player1, player2) {
    this.player1 = player1;
    this.player2 = player2;

    this.weapons = [
      new RockWeapon(),
      new PaperWeapon(),
      new ScissorsWeapon()
    ]
  }

  play() {
    const player1Choise = this.player1.choose(this.weapons);
    const player2Choise = this.player2.choose(this.weapons);

    console.log('player1Choise', player1Choise);
    console.log('player2Choise', player2Choise);

    const gameResult = player1Choise.wins(player2Choise);

    console.log('Game Result: ', gameResult);
  }
}