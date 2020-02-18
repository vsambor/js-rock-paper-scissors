import BaseElement from "../utils/BaseElement.js";

export default class ComputerVsComputer extends BaseElement {
  constructor() {
    super();
  }

  createStyle() {
    return `
    .player-vs-computer-container {
      background-color: green;
      height: 100%;
    }
    `;
  }

  createTemplate(style = '') {
    return /*html*/`
    <style>${style}</style>
    <div class="player-vs-computer-container">COMPUTER VS COMPUTER</div>
    `;
  }
}

customElements.define('computer-vs-computer', ComputerVsComputer);
