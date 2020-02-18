import BaseElement from "../utils/BaseElement.js";

export default class StartCounter extends BaseElement {
  constructor() {
    super();
    this.maxCountSeconds = 3;
    this._startCounting();
  }

  _startCounting() {
    const timer = setInterval(() => {
      if (this.maxCountSeconds === 0) {
        clearInterval(timer);
        this._onCounterFinished();
      } else {
        this.root.querySelector('.start-counter-container').innerHTML = this.maxCountSeconds--;
      }
    }, 1000);
  }

  _onCounterFinished() {
    const doneEvent = new CustomEvent('counter-done', {
      bubbles: true,
      composed: true
    });

    this.dispatchEvent(doneEvent);
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
    `;
  }

  createTemplate(style = '') {
    return /*html*/`
    <style>${style}</style>
    <div class="start-counter-container">Be Ready!</div>
    `;
  }
}

customElements.define('start-counter', StartCounter);