import BaseElement from "../utils/BaseElement.js";
import i18n from "../../i18n/index.js";
import {
  PLAYER_1_WON_RESULT,
  PLAYER_2_WON_RESULT
} from "../utils/constants.js";

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

  _getPlayerChoiceElements() {
    let playerChoiceElements = '';

    if (this.player1Choice && this.player2Choice) {
      const player1WinnerClass = this.resultText === PLAYER_1_WON_RESULT ? 'winner-choice' : '';
      const player2WinnerClass = this.resultText === PLAYER_2_WON_RESULT ? 'winner-choice' : '';

      playerChoiceElements = `
        <div class="${player1WinnerClass}">
          <img src="${this._getImageChoice(this.player1Choice)}">
        </div>

        <div id="result-text">${this.resultText}</div>

        <div class="${player2WinnerClass}">
          <img src="${this._getImageChoice(this.player2Choice)}">
        </div>
      `;
    }

    return playerChoiceElements;
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
        height: 110px;
        justify-content: space-between;
        align-items: center;
      }

      .winner-choice img {
         width: 100px;
         height: 100px;
      }

      #buttons-container {
        margin-top: 50px;
        display: flex;
        flex-direction: column;
      }

      button {
        background-color: #779cbb;
        color: black;
        border: none;
        padding: 14px 44px;
        text-align: center;
        display: inline-block;
        font-size: 18px;
        margin: 8px 2px;
        cursor: pointer;
        width: 200px;
      }
    </style>
    `;
  }

  createTemplate(style = '') {
    return /*html*/`
    ${style}
    <div class="result-display-container">
      <div id="choices-result-container">
        ${this._getPlayerChoiceElements()}
      </div>
      <div id="buttons-container">
        <button id="replay-btn">${i18n.replay_button}</button>
        <button id="reset-btn">${i18n.reset_button}</button>
      </div>
    </div>
    `;
  }

  disconnectedCallback() {
    this.replayButton.removeEventListener('click', this._onReplayClick.bind(this));
    this.resetButton.removeEventListener('click', this._onResetClick.bind(this));
  }
}

customElements.define('result-display', ResultDisplay);
