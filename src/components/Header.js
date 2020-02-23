import BaseElement from "../utils/BaseElement.js";
import i18n from "../../i18n/index.js";

export default class AppHeader extends BaseElement {
  constructor() {
    super();

    this._initElements();
    this._initEventListeners();
  }

  _initElements() {
    this.soundButton = this.root.querySelector('.sound-button');
    this.soundButtonImage = this.root.querySelector('.sound-button img');
  }

  _initEventListeners() {
    this.soundButton.addEventListener('click', this._onSoundButtonClick.bind(this));
    this.soundButton.addEventListener('mouseover', this.playHoverSound.bind(this));
  }

  _onSoundButtonClick() {
    this.playClickSound();
    this._toggleSoundImage();
  }

  _toggleSoundImage() {
    if (this.soundButtonImage.src.includes('sound_on')) {
      this.soundButtonImage.src = '../../assets/img/sound_off.png';
      this.soundManager.stopAllSounds();
    }
    else {
      this.soundButtonImage.src = '../../assets/img/sound_on.png';
      this.soundManager.startAllSounds();
    }
  }

  createStyle() {
    return /*html*/`  
    <style>
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
        position: relative;
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

      .sound-button {
        position: absolute;
        right: 20px;
        top: 37px;
        cursor: pointer;
      }

      .sound-button img {
        width: 33px;
        height: 33px;
      }
    </style>
    `;
  }

  createTemplate(style = '') {
    return /*html*/`
    ${style}
    <header class="header">
      <div class="header-container">
        <div class="header-item header-rock">
          <img src="assets/img/rock.png">
          <p>${i18n.rock}</p>
        </div>
        <div class="header-item header-paper">
          <img src="assets/img/paper.png">
          <p>${i18n.paper}</p>
        </div>
        <div class="header-item header-scissors">
          <img src="assets/img/scissors.png">
          <p>${i18n.scissors}</p>
        </div>
        <div class="sound-button">
          <img src="../../assets/img/sound_on.png">
        </div>
      </div>
    </header>
    `;
  }

  disconnectedCallback() {
    this._removeEventListeners();
  }

  _removeEventListeners() {
    if (this.soundButton) {
      this.soundButton.addEventListener('click', this._onSoundButtonClick.bind(this));
      this.soundButton.addEventListener('mouseover', this.playHoverSound.bind(this));
    }
  }
}

customElements.define('app-header', AppHeader);
