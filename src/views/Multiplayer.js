class Multiplayer extends HTMLElement {
  constructor() {
    super();

    const style = this.createStyle();
    const template = this.createTemplate(style);

    this.attachShadow({ mode: 'open' }).innerHTML = template;
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

export default Multiplayer;