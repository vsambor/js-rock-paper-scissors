import BaseElement from "../utils/BaseElement.js";

export default class ResultDisplay extends BaseElement {
  constructor() {
    super();

    this._initElements();
    this._initEventListeners();
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

  setResultText(value) {
    this.resultText = value;
    this.render();
  }

  createStyle() {
    return `  
    .result-display-container {
      font-size: 20px;
      height: 350px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    #result-text {
      margin-bottom: 30px;
    }

    button {
      width: 200px;
      height: 40px;
      margin-bottom: 20px;
      cursor:pointer;
    }
    `;
  }

  createTemplate(style = '') {
    return /*html*/`
    <style>${style}</style>
    <div class="result-display-container">
      <div id="result-text">${this.resultText}</div>
      <button id="replay-btn">Replay</button>
      <button id="reset-btn">Reset</button>
    </div>
    `;
  }
}

customElements.define('result-display', ResultDisplay);
