import BaseElement from "../utils/BaseElement.js";
import i18n from "../../i18n/index.js";

export default class HeadsUpDisplay extends BaseElement {
  constructor() {
    super();

    this.player1Text = i18n.player1_text;
    this.player2Text = i18n.player2_text;
    this.player1Score = 0;
    this.player2Score = 0;
    this.roundNumber = 0;
    this.render();
  }

  reset() {
    this.player1Score = 0;
    this.player2Score = 0;
    this.roundNumber = 0;
    this.render();
  }

  createStyle() {
    return /*html*/`
    <style>  
      .hud-container {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: center;
        background-color: #779cbb;
        width: 100%;
        height: 50px;
        font-size: 20px;
      }
    </style>
    `;
  }

  createTemplate(style = '') {
    return /*html*/`
    ${style}
    <div class="hud-container">
      <div>${i18n.round_title}: <span id="round-holder">${this.roundNumber}</span></div>
      <div>${i18n.score_title} ${this.player1Text}: <span id="player-score-holder">${this.player1Score}</span></div>
      <div>${i18n.score_title} ${this.player2Text}: <span id="computer-score-holder">${this.player2Score}</span></div>
    </div>
    `;
  }
}

customElements.define('heads-up-display', HeadsUpDisplay);