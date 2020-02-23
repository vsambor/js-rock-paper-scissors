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
    this.resultTextElement = '';
    this.player1Choice = null;
    this.player2Choice = null;
  }

  _initElements() {
    this.replayButtonElement = this.root.getElementById('replay-button');
    this.resetButtonElement = this.root.getElementById('reset-button');
    this.resultTextElement = this.root.getElementById('result-text');
    this.player1ChoiceElement = this.root.getElementById('player1-choice');
    this.player2ChoiceElement = this.root.getElementById('player2-choice');
  }

  _initEventListeners() {
    this.replayButtonElement.addEventListener('click', this._onReplayClick.bind(this));
    this.resetButtonElement.addEventListener('click', this._onResetClick.bind(this));
  }

  _onReplayClick() {
    this.triggerEvent('replay');
  }

  _onResetClick() {
    this.triggerEvent('reset');
  }

  _getImageChoice(choice) {
    return {
      'rock': 'assets/img/rock.png',
      'paper': 'assets/img/paper.png',
      'scissors': 'assets/img/scissors.png'
    }[choice];
  }

  onPropertyUpdated(name) {
    if (name === 'player1Choice') {
      this._createAndAppendImageChoice(this.player1ChoiceElement, this.player1Choice);

      if (this.resultText === PLAYER_1_WON_RESULT) {
        this.player1ChoiceElement.classList.add('winner-choice');
      }
    }

    if (name === 'player2Choice') {
      this._createAndAppendImageChoice(this.player2ChoiceElement, this.player2Choice);

      if (this.resultText === PLAYER_2_WON_RESULT) {
        this.player2ChoiceElement.classList.add('winner-choice');
      }
    }

    if (name === 'resultText') {
      this.player1ChoiceElement.classList.remove('winner-choice');
      this.player2ChoiceElement.classList.remove('winner-choice');
      this.resultTextElement.innerHTML = this.resultText;
    }
  }

  _createAndAppendImageChoice(appendTarget, choice) {
    if (choice) {
      const img = document.createElement('img');
      img.src = this._getImageChoice(choice);
      appendTarget.innerHTML = '';
      appendTarget.append(img);
    }
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
        width: 450px;
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
        <div id="player1-choice"></div>
        <div id="result-text"></div>
        <div id="player2-choice"></div>
      </div>
      <div id="buttons-container">
        <button id="replay-button">${i18n.replay_button}</button>
        <button id="reset-button">${i18n.reset_button}</button>
      </div>
    </div>
    `;
  }

  disconnectedCallback() {
    if (this.replayButton) {
      this.replayButton.removeEventListener('click', this._onReplayClick.bind(this));
    }

    if (this.resetButton) {
      this.resetButton.removeEventListener('click', this._onResetClick.bind(this));
    }
  }
}

customElements.define('result-display', ResultDisplay);
