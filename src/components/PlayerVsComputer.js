
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
    }
    `;
  }

  createTemplate(style = '') {
    return `
    <style>${style}</style>
    <div class="player-vs-computer-container">PLAYER VS COMPUTER</div>
    `;
  }
}

customElements.define('player-vs-computer', PlayerVsComputer);

export default PlayerVsComputer;