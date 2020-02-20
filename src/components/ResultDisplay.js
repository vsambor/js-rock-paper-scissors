import BaseElement from "../utils/BaseElement.js";

export default class ResultDisplay extends BaseElement {
  constructor() {
    super();

    this.root.getElementById('replay-btn').addEventListener('click', this._onReplayClick.bind(this));
    this.root.getElementById('reset-btn').addEventListener('click', this._onResetClick.bind(this));
  }

  _onReplayClick() {
    const replayEvent = new CustomEvent('replay', { bubbles: true, composed: true });
    this.dispatchEvent(replayEvent);
  }

  _onResetClick() {
    const resetEvent = new CustomEvent('reset', { bubbles: true, composed: true });
    this.dispatchEvent(resetEvent);
  }

  createStyle() {
    return `  
    .result-display-container {
      font-size: 20px;
      height: 350px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    button {
      width: 100px;
      height: 60px;
      margin-left: 20px;
    }
    `;
  }

  createTemplate(style = '') {
    return /*html*/`
    <style>${style}</style>
    <div class="result-display-container">
      Result - 1-1-1
      <button id="replay-btn">Replay</button>
      <button id="reset-btn">Reset</button>
    </div>
    `;
  }
}

customElements.define('result-display', ResultDisplay);
