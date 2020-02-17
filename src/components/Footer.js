
class AppFooter extends HTMLElement {
  constructor() {
    super();

    const style = this.createStyle();
    const template = this.createTemplate(style);

    this.attachShadow({ mode: 'open' }).innerHTML = template;
  }

  createStyle() {
    return `  
    .footer {
      flex-shrink: 0;
      background-color: rgb(85, 155, 216);
      text-align: center;
      padding: 10px 0px;
    }
    `;
  }

  createTemplate(style = '') {
    return /*html*/`
    <style>${style}</style>
    <footer class="footer">${(new Date()).getFullYear()} © Rock Paper Scissors. All rights reserved.</footer>
    `;
  }
}

customElements.define('app-footer', AppFooter);

export default AppFooter;