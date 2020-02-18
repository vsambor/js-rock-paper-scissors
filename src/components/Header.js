import BaseElement from "../utils/BaseElement.js";

export default class AppHeader extends BaseElement {
  constructor() {
    super();
  }

  createStyle() {
    return `  
    .header {
      background-color: rgb(85, 155, 216);
      text-align: center;
    }
    
    .header h2 {
      margin: 0;
      padding: 30px;
    }
    
    .header-container {
      display: flex;
      flex-direction: row;
      justify-content: center;
      padding-top: 15px;
      padding-bottom: 15px;
    }
    
    .header-item {
      display: flex;
      flex-direction: column;
      margin: 0px 25px 0px 25px;
    }
    
    .header-item p {
      margin: 0;
      color: yellow;
      font-weight: bold;
      font-size: 20px;
    }
    
    .header-item img {
      width: 50px;
      height: 50px;
    }
    `;
  }

  createTemplate(style = '') {
    return /*html*/`
    <style>${style}</style>
    <header class="header">
      <div class="header-container">
        <div class="header-item header-rock">
          <img src="images/rock.png">
          <p>Rock</p>
        </div>
        <div class="header-item header-paper">
          <img src="images/paper.png">
          <p>Paper</p>
        </div>
        <div class="header-item header-scissors">
          <img src="images/scissors.png">
          <p>Scissors</p>
        </div>
      </div>
    </header>
    `;
  }
}

customElements.define('app-header', AppHeader);
