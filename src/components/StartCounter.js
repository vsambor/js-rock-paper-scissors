
class StartCounter extends HTMLElement {
  constructor() {
    super();

    const style = this.createStyle();
    const template = this.createTemplate(style);

    this.attachShadow({ mode: 'open' }).innerHTML = template;
  }

  createStyle() {
    return `  
    .start-counter-container {
      background-color: pink;
    }
    `;
  }

  createTemplate(style = '') {
    return /*html*/`
    <style>${style}</style>
    <div class="start-counter-container">
      StartCounter
      <h1> 3, 2, 1...</h1>
    </div>
    `;
  }
}

customElements.define('start-counter', StartCounter);

export default StartCounter;