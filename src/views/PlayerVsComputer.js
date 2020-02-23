import BaseElement from "../utils/BaseElement.js";
import i18n from "../../i18n/index.js";
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
    this._initElements();
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

  _initElements() {
    this.hudElement = this.root.getElementById('hud');
    this.startCounterElement = this.root.getElementById('start-counter');
    this.weaponSelectorElement = this.root.getElementById('weapon-selector');
    this.resultDisplayElement = this.root.getElementById('result-display');
  }

  _initEventListeners() {
    this.startCounterElement.addEventListener('counter-start', this._onCounterStart.bind(this));
    this.startCounterElement.addEventListener('counter-end', this._onCounterEnd.bind(this));
    this.weaponSelectorElement.addEventListener('weapon-selected', this._onWeaponSelected.bind(this));
    this.resultDisplayElement.addEventListener('replay', this._onReplay.bind(this));
    this.resultDisplayElement.addEventListener('reset', this._onReset.bind(this));
  }

  _onCounterStart() {
    this.weaponSelectorElement.style.display = 'block';
    this.weaponSelectorElement.enableElement();
    this.hudElement.style.display = 'block';
    this.hudElement.setProperty('player1Text', 'Player');
    this.hudElement.setProperty('player2Text', 'Computer');
    this.hudElement.setProperty('roundNumber', this.game.numberRounds + 1);
  }

  _onCounterEnd() {
    this.startCounterElement.style.display = 'none';
    this.resultDisplayElement.style.display = 'block';
    this.weaponSelectorElement.disableElement();

    this._startGame();
  }

  _startGame() {
    const roundResult = this.game.play();

    this.hudElement.setProperty('player1Score', this.player.score);
    this.hudElement.setProperty('player2Score', this.computer.score);
    this.resultDisplayElement.setProperty('resultText', roundResult);
    this.resultDisplayElement.setProperty('player1Choice', this.player.choice.constructor.name.toLowerCase());
    this.resultDisplayElement.setProperty('player2Choice', this.computer.choice.constructor.name.toLowerCase());
  }

  _onWeaponSelected(event) {
    this.player.setChoice(event.detail.weapon);
  }

  _onReplay(event) {
    this.startCounterElement.reset();
    this.resultDisplayElement.style.display = 'none';
    this.weaponSelectorElement.style.display = 'none';
    this.startCounterElement.style.display = 'block';
  }

  _onReset(event) {
    this.startCounterElement.reset();
    this.hudElement.reset();
    this.game.reset();
    this.resultDisplayElement.style.display = 'none';
    this.weaponSelectorElement.style.display = 'none';
    this.startCounterElement.style.display = 'block';
  }

  createStyle() {
    return /*html*/`
    <style>
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
    </style>
    `;
  }

  createTemplate(style = '') {
    return /*html*/`
    ${style}
    <div class="player-vs-computer-container">
      <h4>${i18n.player_vs_computer_title}</h4>
      <heads-up-display id="hud"></heads-up-display>
      <start-counter id="start-counter"></start-counter>
      <result-display id="result-display"></result-display>
      <weapon-selector id="weapon-selector"></weapon-selector>
    </div>
    `;
  }

  disconnectedCallback() {
    this.startCounterElement.removeEventListener('counter-start', this._onCounterStart.bind(this));
    this.startCounterElement.removeEventListener('counter-end', this._onCounterEnd.bind(this));
    this.weaponSelectorElement.removeEventListener('weapon-selected', this._onWeaponSelected.bind(this));
    this.resultDisplayElement.removeEventListener('replay', this._onReplay.bind(this));
    this.resultDisplayElement.removeEventListener('reset', this._onReset.bind(this));
  }
}

customElements.define('player-vs-computer', PlayerVsComputer);
