class WeaponSelector extends HTMLElement {
  constructor() {
    super();

    const style = this.createStyle();
    const template = this.createTemplate(style);

    const shadowRoot = this.attachShadow({ mode: 'open' });
    shadowRoot.innerHTML = template;

    shadowRoot.querySelector('.weapon-item.weapon-rock').onclick = this.onRockClick;
    shadowRoot.querySelector('.weapon-item.weapon-paper').onclick = this.onPaperClick;
    shadowRoot.querySelector('.weapon-item.weapon-scissors').onclick = this.onScissorsClick;
  }


  onRockClick(event) {
    alert("clicked" + event.name);
  }

  onPaperClick(event) {
    alert("clicked" + event.name);
  }

  onScissorsClick(event) {
    alert("clicked" + event.name);
  }

  createStyle() {
    return `  
    .weapon-selector-container {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      background-color: #332345;
      width: 100%;
      height: 150px;
      font-size: 20px;
    }
    
    .weapon-selector-container h2 {
      margin: 0;
      padding: 30px;
    }
    
    .weapons-container {
      display: flex;
      flex-direction: row;
      justify-content: center;
      padding-top: 15px;
      padding-bottom: 15px;
    }
    
    .weapon-item {
      display: flex;
      flex-direction: column;
      margin: 0px 25px 0px 25px;
      cursor: pointer;
    }

    .weapon-item.active {
      background-color: #ff7b7b;
    }
    
    .weapon-item p {
      margin: 0;
      color: yellow;
      font-weight: bold;
      font-size: 20px;
    }
    
    .weapon-item img {
      width: 50px;
      height: 50px;
    }
    `;
  }

  createTemplate(style = '') {
    return /*html*/`
    <style>${style}</style>
    <div class="weapon-selector-container">
      <div class="weapons-container">
        <div class="weapon-item weapon-rock active">
          <img src="images/rock.png">
          <p>Rock</p>
        </div>
        <div class="weapon-item weapon-paper">
          <img src="images/paper.png">
          <p>Paper</p>
        </div>
        <div class="weapon-item weapon-scissors">
          <img src="images/scissors.png">
          <p>Scissors</p>
        </div>
      </div>
    </div>
    `;
  }
}

customElements.define('weapon-selector', WeaponSelector);

export default WeaponSelector;