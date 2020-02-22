import BaseElement from "../utils/BaseElement.js";

export default class HeadsUpDisplay extends BaseElement {
  constructor() {
    super();

    this.player1Text = 'Player1';
    this.player2Text = 'Player2';
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
      <div>Round: <span id="round-holder">${this.roundNumber}</span></div>
      <div>Score ${this.player1Text}: <span id="player-score-holder">${this.player1Score}</span></div>
      <div>Score ${this.player2Text}: <span id="computer-score-holder">${this.player2Score}</span></div>
    </div>
    `;
  }
}

customElements.define('heads-up-display', HeadsUpDisplay);