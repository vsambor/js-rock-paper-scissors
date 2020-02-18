class StartCounter extends HTMLElement {
  constructor() {
    super();

    const style = this.createStyle();
    const template = this.createTemplate(style);

    const shadowRoot = this.attachShadow({ mode: 'open' });
    shadowRoot.innerHTML = template;

    let count = 3;
    const timer = setInterval(() => {
      if (count === 0) {
        clearInterval(timer);

        console.log('DONE!');

      } else {
        shadowRoot.querySelector('.start-counter-container').innerHTML = count--;
      }
    }, 1000);

  }

  createStyle() {
    return `  
    .start-counter-container {
      font-size: 140px;
      height: 300px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    `;
  }

  createTemplate(style = '') {
    return /*html*/`
    <style>${style}</style>
    <div class="start-counter-container">Be Ready!</div>
    `;
  }
}

customElements.define('start-counter', StartCounter);

export default StartCounter;