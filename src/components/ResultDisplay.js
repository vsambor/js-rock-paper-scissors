class ResultDisplay extends HTMLElement {
  constructor() {
    super();

    const style = this.createStyle();
    const template = this.createTemplate(style);

    const shadowRoot = this.attachShadow({ mode: 'open' });
    shadowRoot.innerHTML = template;
  }

  createStyle() {
    return `  
    .result-display-container {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      background-color: #332345;
      width: 100%;
      height: 150px;
      font-size: 20px;
    }
    `;
  }

  createTemplate(style = '') {
    return /*html*/`
    <style>${style}</style>
    <div class="result-display-container">
        
    </div>
    `;
  }
}

customElements.define('result-display', ResultDisplay);

export default ResultDisplay;