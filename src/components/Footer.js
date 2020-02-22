import BaseElement from "../utils/BaseElement.js";
import i18n from "../../i18n/index.js";

export default class AppFooter extends BaseElement {
  constructor() {
    super();
  }

  createStyle() {
    return /*html*/`  
    <style>
    .footer {
      flex-shrink: 0;
      background-color: rgb(85, 155, 216);
      text-align: center;
      padding: 10px 0px;
    }
    </style>
    `;
  }

  createTemplate(style = '') {
    return /*html*/`
    ${style}
    <footer class="footer">${(new Date()).getFullYear()}${i18n.footer_rights}</footer>
    `;
  }
}

customElements.define('app-footer', AppFooter);
