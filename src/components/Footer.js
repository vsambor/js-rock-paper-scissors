import BaseElement from "../utils/BaseElement.js";

export default class AppFooter extends BaseElement {
  constructor() {
    super();
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
