import BaseElement from "../utils/BaseElement.js";
import StartCounter from "../components/StartCounter.js";
import HeadsUpDisplay from "../components/HeadsUpDisplay.js";
import WeaponSelector from "../components/WeaponSelector.js";
import ResultDisplay from "../components/ResultDisplay.js";

export default class PlayerVsComputer extends BaseElement {
  constructor() {
    super();

    this.hudElement = this.root.getElementById('hud');
    this.counterElement = this.root.getElementById('start-counter');
    this.weaponSelectorElement = this.root.getElementById('weapon-selector');
    this.resultDisplayElement = this.root.getElementById('result-display');

    this._handleCounterEvents();
  }

  _handleCounterEvents() {
    this.counterElement.addEventListener('counter-start', this._onCounterStart.bind(this));
    this.counterElement.addEventListener('counter-end', this._onCounterEnd.bind(this));
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
  }
}

customElements.define('player-vs-computer', PlayerVsComputer);
