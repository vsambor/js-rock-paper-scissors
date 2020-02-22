import BaseElement from "../utils/BaseElement.js";

export default class ResultDisplay extends BaseElement {
  constructor() {
    super();

    this._initProperties();
    this._initElements();
    this._initEventListeners();
  }

  _initProperties() {
    this.resultText = '';
    this.player1Choice = null;
    this.player2Choice = null;
  }

  _initElements() {
    this.replayButton = this.root.getElementById('replay-btn');
    this.resetButton = this.root.getElementById('reset-btn');
    this.resultText = this.root.getElementById('result-text');
  }

  _initEventListeners() {
    this.replayButton.addEventListener('click', this._onReplayClick.bind(this));
    this.resetButton.addEventListener('click', this._onResetClick.bind(this));
  }

  _onReplayClick() {
    const replayEvent = new CustomEvent('replay', { bubbles: true, composed: true });
    this.dispatchEvent(replayEvent);
  }

  _onResetClick() {
    const resetEvent = new CustomEvent('reset', { bubbles: true, composed: true });
    this.dispatchEvent(resetEvent);
  }

  _getImageChoice(choice) {
    return {
      'rock': 'assets/img/rock.png',
      'paper': 'assets/img/paper.png',
      'scissors': 'assets/img/scissors.png'
    }[choice];
  }

  createStyle() {
    return /*html*/`  
    <style>
      .result-display-container {
        font-size: 20px;
        height: 350px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }

      .result-display-container img {
        width: 50px;
        height: 50px;
      }

      #choices-result-container {
        display: flex;
        flex-direction: row;
        width: 500px;
        justify-content: space-between;
        align-items: center;
      }

      #buttons-container {
        margin-top: 50px;
        display: flex;
        flex-direction: column;
      }

      button {
        width: 200px;
        height: 40px;
        margin-bottom: 10px;
        cursor:pointer;
        background-color: #779cbb;
        font-size: 18px;
      }
    </style>
    `;
  }

  createTemplate(style = '') {
    return /*html*/`
    ${style}
    <div class="result-display-container">
      <div id="choices-result-container">
        <div id="player1-choice"><img src="${this._getImageChoice(this.player1Choice)}"></div>
        <div id="result-text">${this.resultText}</div>
        <div id="player2-choice"><img src="${this._getImageChoice(this.player2Choice)}"></div>
      </div>
      <div id="buttons-container">
        <button id="replay-btn">Replay</button>
        <button id="reset-btn">Reset</button>
      </div>
    </div>
    `;
  }

  connectedCallback() {
    this._initEventListeners();
  }

  disconnectedCallback() {
    this.replayButton.removeEventListener('click', this._onReplayClick.bind(this));
    this.resetButton.removeEventListener('click', this._onResetClick.bind(this));
  }
}

customElements.define('result-display', ResultDisplay);
