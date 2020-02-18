class Menu extends HTMLElement {
  constructor() {
    super();

    const style = this.createStyle();
    const template = this.createTemplate(style);

    this.attachShadow({ mode: 'open' }).innerHTML = template;
  }

  createStyle() {
    return `
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
        background-color: rgb(85, 155, 216);
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
    `;
  }

  createTemplate(style = '') {
    return /*html*/`
    <style>${style}</style>
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

export default Menu;