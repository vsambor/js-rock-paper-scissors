class HeadsUpDisplay extends HTMLElement {
  constructor() {
    super();

    const style = this.createStyle();
    const template = this.createTemplate(style);

    const shadowRoot = this.attachShadow({ mode: 'open' });
    shadowRoot.innerHTML = template;
  }

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
      <div>Player Score: <span id="player-score-holder">0</span></div>
      <div>Computer Score: <span id="computer-score-holder">0</span></div>
    </div>
    `;
  }
}

customElements.define('heads-up-display', HeadsUpDisplay);

export default HeadsUpDisplay;