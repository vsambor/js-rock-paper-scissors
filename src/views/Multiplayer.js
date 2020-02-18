import BaseElement from "../utils/BaseElement.js";

export default class Multiplayer extends BaseElement {
  constructor() {
    super();
  }

  createStyle() {
    return `  
    .multiplayer-container {
      background-color: GREY;
      height: 100%;
    }
    `;
  }

  createTemplate(style = '') {
    return /*html*/`
    <style>${style}</style>
    <div class="multiplayer-container">MULTIPLAYER</div>
    `;
  }
}

customElements.define('multi-player', Multiplayer);
