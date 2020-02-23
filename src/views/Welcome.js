import BaseElement from "../utils/BaseElement.js";
import i18n from "../../i18n/index.js";
import { SOUND_PATH_LIST } from "../utils/constants.js";

export default class Welcome extends BaseElement {
  constructor() {
    super();

    this._initElements();
    this._initEventListeners();
  }

  _initElements() {
    this.continueButton = this.root.querySelector('.button');
  }

  _initEventListeners() {
    this.continueButton.addEventListener('click', this._onContinueButtonClick.bind(this));
    this.continueButton.addEventListener('mouseover', this.playHoverSound.bind(this));
  }

  _onContinueButtonClick() {
    this.playClickSound();

    if (!this.soundManager.isPlaying()) {
      this.soundManager.playSound(SOUND_PATH_LIST.background, 0.3, true);
    }
  }

  createStyle() {
    return /*html*/`  
    <style>
    @import "../../public/css/global.css";

    .welcome-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      background-color: #ececec;
      height: 100%;
      text-align: center;
    }

    .welcome-container h4 {
      margin: 0;
      padding: 10px;
    }

    .welcome-container img {
      margin-top: 33px;
      width: 430px;
      height: auto;
    }
    </style>
    `;
  }

  createTemplate(style = '') {
    return /*html*/`
    ${style}
    <div class="welcome-container">
      <h4>${i18n.welcome_title}</h4>
      <img src="../../assets/img/how.png">
      <a class="button" href="/#menu">Continue</a>
    </div>
    `;
  }

  disconnectedCallback() {
    this._removeEventListeners();
  }

  _removeEventListeners() {
    if (this.continueButton) {
      this.continueButton.removeEventListener('click', this._onContinueButtonClick.bind(this));
      this.continueButton.removeEventListener('mouseover', this.playHoverSound.bind(this));
    }
  }
}

customElements.define('welcome-view', Welcome);
