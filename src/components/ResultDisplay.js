import BaseElement from "../utils/BaseElement.js";

export default class ResultDisplay extends BaseElement {
  constructor() {
    super();
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
    }
    `;
  }

  createTemplate(style = '') {
    return /*html*/`
    <style>${style}</style>
    <div class="result-display-container">
      Result - 1-1-1-1-1-1-1-1-1-1-1--1
    </div>
    `;
  }
}

customElements.define('result-display', ResultDisplay);
