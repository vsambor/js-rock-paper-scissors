
class ComputerVsComputer extends HTMLElement {
  constructor() {
    super();

    const style = this.createStyle();
    const template = this.createTemplate(style);

    this.attachShadow({ mode: 'open' }).innerHTML = template;
  }

  createStyle() {
    return `
    .player-vs-computer-container {
      background-color: green;
    }
    `;
  }

  createTemplate(style = '') {
    return `
    <style>${style}</style>
    <div class="player-vs-computer-container">COMPUTER VS COMPUTER</div>
    `;
  }
}

customElements.define('computer-vs-computer', ComputerVsComputer);

export default ComputerVsComputer;