import BaseElement from "../utils/BaseElement.js";

export default class Menu extends BaseElement {
  constructor() {
    super();

    const menuButtons = this.root.querySelectorAll('.button');

    menuButtons.forEach(button => button.addEventListener('click', this.playClickSound.bind(this)));
    menuButtons.forEach(button => button.addEventListener('mouseover', this.playHoverSound.bind(this)));
  }

  createStyle() {
    return /*html*/`
    <style>
      .main-menu {
        align-items: center;
        height: 100%;
        background-color: #fffcd7;
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
      }

      .main-form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
      }

      .button {
        background-color: #559bd8;
        color: black;
        border: none;
        padding: 14px 44px;
        text-align: center;
        display: inline-block;
        font-size: 20px;
        margin: 15px 2px;
        cursor: pointer;
        text-decoration: none;
        width: 300px;
      }

      .button:hover {
        color: #ffffff;
        background: #1d3a54;
        transition: all 0.3s ease 0s;
      }
    </style>
    `;
  }

  createTemplate(style = '') {
    return /*html*/`
    ${style}
    <div class="main-menu">
      <form class="main-form">
        <a class="button" href="/#player-vs-computer">Player vs Computer</a>
        <a class="button" href="/#computer-vs-computer">Computer vs Computer</a>
        <a class="button" href="/#multiplayer">Multiplayer</a>
      </form>
    </div>
    `;
  }
}

customElements.define('main-menu', Menu);
