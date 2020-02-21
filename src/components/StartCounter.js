import BaseElement from "../utils/BaseElement.js";

const MAX_COUNTER_SECONDS = 3;
export default class StartCounter extends BaseElement {
  constructor() {
    super();

    this.maxCountSeconds = MAX_COUNTER_SECONDS;

    this._initElements();
    this._initEventListeners();
  }

  _initElements() {
    this.buttonStart = this.root.getElementById('start-counter-button');
    this.numberHolder = this.root.getElementById('start-counter-number');
  }

  _initEventListeners() {
    this.root.getElementById('start-counter-button').addEventListener('click', this._startCounting.bind(this));
  }

  _startCounting() {
    this.buttonStart.style.display = 'none';
    this.numberHolder.style.display = 'block';
    this.numberHolder.innerHTML = this.maxCountSeconds;

    this._onStartCounting();

    const timer = setInterval(() => {
      if (this.maxCountSeconds === 0) {
        clearInterval(timer);
        this._onFinishCounting();
      } else {
        this.numberHolder.innerHTML = this.maxCountSeconds--;
      }
    }, 1000);
  }

  _onStartCounting() {
    const startEvent = new CustomEvent('counter-start', { bubbles: true, composed: true });
    this.dispatchEvent(startEvent);
  }

  _onFinishCounting() {
    const endEvent = new CustomEvent('counter-end', { bubbles: true, composed: true });
    this.dispatchEvent(endEvent);
  }

  reset() {
    this.maxCountSeconds = MAX_COUNTER_SECONDS;
    this.numberHolder.style.display = 'none';
    this.buttonStart.style.display = 'block';
  }

  createStyle() {
    return `  
    .start-counter-container {
      height: 350px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    #start-counter-number {
      font-size: 140px;
    }

    #start-counter-button {
      font-size: 33px;
      background-color: #77ff77;
      padding: 10px;
      cursor: pointer;
    }
    `;
  }

  createTemplate(style = '') {
    return /*html*/`
    <style>${style}</style>
    <div class="start-counter-container">
      <div id="start-counter-number"></div>
      <div id="start-counter-button">Click here when you are ready to play...</div>
    </div>
    `;
  }
}

customElements.define('start-counter', StartCounter);