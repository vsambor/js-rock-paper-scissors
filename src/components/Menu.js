
class Menu extends HTMLElement {
  constructor() {
    super();

    const style = this.createStyle();
    const template = this.createTemplate(style);

    this.attachShadow({ mode: 'open' }).innerHTML = template;
  }

  createStyle() {
    return `
      .main {
        margin: auto;
        padding-left: 30%;
        padding-right: 30%;
        padding-top: 50px;
        padding-bottom: 350px;
        background-color: #fffcd7;
      }

      .main-form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
      }

      .button {
        background-color: rgb(85, 155, 216);
        color: black;
        border: none;
        padding: 10px 28px;
        text-align: center;
        display: inline-block;
        font-size: 16px;
        margin: 4px 2px;
        cursor: pointer;
        text-decoration: none;
      }
    `;
  }

  createTemplate(style = '') {
    return `
    <style>${style}</style>
    <form class="main-form">
      <a class="button" href="/#player-vs-computer">Player vs Computer</a>
      <a class="button" href="/#computer-vs-computer">Computer vs Computer</a>
      <a class="button" href="/#multiplayer">Multiplayer</a>
    </form>
    `;
  }
}

customElements.define('main-menu', Menu);

export default Menu;