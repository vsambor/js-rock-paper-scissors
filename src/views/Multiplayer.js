import BaseElement from "../utils/BaseElement.js";
import i18n from "../../i18n/index.js";

export default class Multiplayer extends BaseElement {
  constructor() {
    super();
  }

  createStyle() {
    return /*html*/`  
    <style>
    .multiplayer-container {
      background-color: #cec9c9;
      height: 100%;
      text-align: center;
    }

    .multiplayer-container h4 {
        margin: 0;
        padding: 10px;
      }
    </style>
    `;
  }

  createTemplate(style = '') {
    return /*html*/`
    ${style}
    <div class="multiplayer-container">
      <h4>${i18n.multiplayer_title}</h4>
      Comming soon :)  
    </div>
    `;
  }
}

customElements.define('multi-player', Multiplayer);
