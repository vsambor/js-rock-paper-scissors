import StartCounter from "../components/StartCounter.js";

class PlayerVsComputer extends HTMLElement {
  constructor() {
    super();

    const style = this.createStyle();
    const template = this.createTemplate(style);

    this.attachShadow({ mode: 'open' }).innerHTML = template;
  }

  createStyle() {
    return `  
    .player-vs-computer-container {
      background-color: red;
      height: 100%;
    }
    `;
  }

  createTemplate(style = '') {
    return /*html*/`
    <style>${style}</style>
    <div class="player-vs-computer-container">
      PLAYER VS COMPUTER
      <start-counter></start-counter>
    </div>
    `;
  }
}

customElements.define('player-vs-computer', PlayerVsComputer);

export default PlayerVsComputer;