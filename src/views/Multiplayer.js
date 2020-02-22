import BaseElement from "../utils/BaseElement.js";

export default class Multiplayer extends BaseElement {
  constructor() {
    super();
  }

  createStyle() {
    return /*html*/`  
    <style>
    .multiplayer-container {
      background-color: GREY;
      height: 100%;
    }
    </style>
    `;
  }

  createTemplate(style = '') {
    return /*html*/`
    ${style}
    <div class="multiplayer-container">MULTIPLAYER</div>
    `;
  }
}

customElements.define('multi-player', Multiplayer);
