import BaseElement from "../utils/BaseElement.js";
import StartCounter from "../components/StartCounter.js";
import HeadsUpDisplay from "../components/HeadsUpDisplay.js";
import WeaponSelector from "../components/WeaponSelector.js";
import ResultDisplay from "../components/ResultDisplay.js";
import Game from "../models/Game.js";
import HumanPlayer from "../models/HumanPlayer.js";
import ComputerPlayer from "../models/ComputerPlayer.js";
import Rock from "../models/weapons/Rock.js";

const PLAYER_DEFAULT_WEAPON = new Rock();

export default class PlayerVsComputer extends BaseElement {
  constructor() {
    super();

    this._initPlayers();
    this._initGame();
    this._initComponents();
    this._initEventListeners();
  }

  _initPlayers() {
    this.player = new HumanPlayer();
    this.player.setChoice(PLAYER_DEFAULT_WEAPON);

    this.computer = new ComputerPlayer();
  }

  _initGame() {
    this.game = new Game(this.player, this.computer);
  }

  _initComponents() {
    this.hudElement = this.root.getElementById('hud');
    this.counterElement = this.root.getElementById('start-counter');
    this.weaponSelectorElement = this.root.getElementById('weapon-selector');
    this.resultDisplayElement = this.root.getElementById('result-display');
  }

  _initEventListeners() {
    this.counterElement.addEventListener('counter-start', this._onCounterStart.bind(this));
    this.counterElement.addEventListener('counter-end', this._onCounterEnd.bind(this));
    this.weaponSelectorElement.addEventListener('weapon-selected', this._onWeaponSelected.bind(this));
    this.resultDisplayElement.addEventListener('replay', this._onReplay.bind(this));
    this.resultDisplayElement.addEventListener('reset', this._onReset.bind(this));
  }

  _onCounterStart() {
    this.weaponSelectorElement.style.display = 'block';
    this.hudElement.style.display = 'block';
    this.hudElement.player1Text = 'PL1';
    this.hudElement.player2Text = 'CMP';
  }

  _onCounterEnd() {
    this.counterElement.style.display = 'none';
    this.resultDisplayElement.style.display = 'block';

    this._startGame();
  }

  _startGame() {
    this.game.play();

    console.log("Round: ", this.game.numberRounds);

    console.log("P1 score: ", this.player.score);
    console.log("P1 choice: ", this.player.choice);

    console.log("P2 score: ", this.computer.score);
    console.log("P2 choice: ", this.computer.choice);
  }

  _onWeaponSelected(event) {
    this.player.setChoice(event.detail.weapon);
  }

  _onReplay(event) {
    console.log('replay clicked!')
  }

  _onReset(event) {
    console.log('reset clicked!');
  }

  createStyle() {
    return `
    .player-vs-computer-container {
      background-color: #ffaebd;
      text-align: center;
      margin-bottom: 20px;
      height: 100%;
    }

    .player-vs-computer-container h4 {
      margin: 0;
      padding: 10px;
    }

    #hud,
    #result-display,
    #weapon-selector {
      display: none;
    }
    `;
  }

  createTemplate(style = '') {
    return /*html*/`
    <style>${style}</style>
    <div class="player-vs-computer-container">
      <h4>PLAYER VS COMPUTER</h4>
      <heads-up-display id="hud"></heads-up-display>
      <start-counter id="start-counter"></start-counter>
      <result-display id="result-display"></result-display>
      <weapon-selector id="weapon-selector"></weapon-selector>
    </div>
    `;
  }

  disconnectedCallback() {
    this.counterElement.removeEventListener('counter-start', this._onCounterStart.bind(this));
    this.counterElement.removeEventListener('counter-end', this._onCounterEnd.bind(this));
    this.weaponSelectorElement.removeEventListener('weapon-selected', this._onWeaponSelected.bind(this));
  }
}

customElements.define('player-vs-computer', PlayerVsComputer);
