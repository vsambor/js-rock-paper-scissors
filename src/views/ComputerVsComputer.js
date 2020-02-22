import BaseElement from "../utils/BaseElement.js";
import StartCounter from "../components/StartCounter.js";
import HeadsUpDisplay from "../components/HeadsUpDisplay.js";
import ResultDisplay from "../components/ResultDisplay.js";
import Game from "../models/Game.js";
import ComputerPlayer from "../models/ComputerPlayer.js";

export default class ComputerVsComputer extends BaseElement {
  constructor() {
    super();

    this._initPlayers();
    this._initGame();
    this._initElements();
    this._initEventListeners();
  }

  _initPlayers() {
    this.player1 = new ComputerPlayer();
    this.player2 = new ComputerPlayer();
  }

  _initGame() {
    this.game = new Game(this.player1, this.player2);
  }

  _initElements() {
    this.hudElement = this.root.getElementById('hud');
    this.startCounterElement = this.root.getElementById('start-counter');
    this.resultDisplayElement = this.root.getElementById('result-display');
  }

  _initEventListeners() {
    this.startCounterElement.addEventListener('counter-start', this._onCounterStart.bind(this));
    this.startCounterElement.addEventListener('counter-end', this._onCounterEnd.bind(this));
    this.resultDisplayElement.addEventListener('replay', this._onReplay.bind(this));
    this.resultDisplayElement.addEventListener('reset', this._onReset.bind(this));
  }

  _onCounterStart() {
    this.hudElement.style.display = 'block';
    this.hudElement.setProperty('player1Text', 'Computer');
    this.hudElement.setProperty('player2Text', 'Computer');
    this.hudElement.setProperty('roundNumber', this.game.numberRounds + 1);
  }

  _onCounterEnd() {
    this.startCounterElement.style.display = 'none';
    this.resultDisplayElement.style.display = 'block';

    this._startGame();
  }

  _startGame() {
    const roundResult = this.game.play();

    this.hudElement.setProperty('player1Score', this.player1.score);
    this.hudElement.setProperty('player2Score', this.player2.score);
    this.resultDisplayElement.setProperty('resultText', roundResult);
    this.resultDisplayElement.setProperty('player1Choice', this.player1.choice.constructor.name.toLowerCase());
    this.resultDisplayElement.setProperty('player2Choice', this.player2.choice.constructor.name.toLowerCase());
  }

  _onReplay(event) {
    console.log('replay clicked!');
    this.startCounterElement.reset();
    this.resultDisplayElement.style.display = 'none';
    this.weaponSelectorElement.style.display = 'none';
    this.startCounterElement.style.display = 'block';
  }

  _onReset(event) {
    console.log('reset clicked!');
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
      .computer-vs-computer-container {
        background-color: #b9e8b9;
        text-align: center;
        margin-bottom: 20px;
        height: 100%;
      }

      .computer-vs-computer-container h4 {
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
    <div class="computer-vs-computer-container">
      <h4>COMPUTER VS COMPUTER</h4>
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

customElements.define('computer-vs-computer', ComputerVsComputer);
