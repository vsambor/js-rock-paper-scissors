import BaseElement from "../utils/BaseElement.js";

export default class StartCounter extends BaseElement {
  constructor() {
    super();
    this.maxCountSeconds = 3;

    this.root.getElementById('start-counter-button')
      .addEventListener('click', this._startCounting.bind(this));
  }

  _startCounting() {
    this._onStartCounting();

    const timer = setInterval(() => {
      if (this.maxCountSeconds === 0) {
        clearInterval(timer);
        this._onFinishCounting();
      } else {
        this.root.querySelector('.start-counter-container').innerHTML = this.maxCountSeconds--;
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

  createStyle() {
    return `  
    .start-counter-container {
      font-size: 140px;
      height: 350px;
      display: flex;
      align-items: center;
      justify-content: center;
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
      <div id="start-counter-button">Click here when you are ready to play...</div>
    </div>
    `;
  }
}

customElements.define('start-counter', StartCounter);