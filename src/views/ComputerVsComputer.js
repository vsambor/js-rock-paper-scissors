import BaseElement from "../utils/BaseElement.js";

export default class ComputerVsComputer extends BaseElement {
  constructor() {
    super();
  }

  createStyle() {
    return /*html*/`
    <style>
    .player-vs-computer-container {
      background-color: green;
      height: 100%;
    }
    </style>
    `;
  }

  createTemplate(style = '') {
    return /*html*/`
    ${style}
    <div class="player-vs-computer-container">COMPUTER VS COMPUTER</div>
    `;
  }
}

customElements.define('computer-vs-computer', ComputerVsComputer);
