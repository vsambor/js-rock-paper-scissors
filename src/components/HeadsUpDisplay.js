import BaseElement from "../utils/BaseElement.js";

export default class HeadsUpDisplay extends BaseElement {
  constructor() {
    super();

    this.player1Text = 'Player 1';
    this.player2Text = 'Player 2';
    this.render();
  }

  // set player1Text(value) {
  //   this.player1Text = value;
  //   this.render();
  // }

  // set player2Text(value) {
  //   this.player2Text = value;
  //   this.render();
  // }

  createStyle() {
    return `  
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
    `;
  }

  createTemplate(style = '') {
    return /*html*/`
    <style>${style}</style>
    <div class="hud-container">
      <div>Round: <span id="round-holder">0</span></div>
      <div>Score ${this.player1Text}: <span id="player-score-holder">0</span></div>
      <div>Score ${this.player2Text}: <span id="computer-score-holder">0</span></div>
    </div>
    `;
  }
}

customElements.define('heads-up-display', HeadsUpDisplay);