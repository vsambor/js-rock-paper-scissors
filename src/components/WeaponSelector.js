import BaseElement from "../utils/BaseElement.js";
import Rock from "../models/weapons/Rock.js";
import Paper from "../models/weapons/Paper.js";
import Scissors from "../models/weapons/Scissors.js";
import { SOUND_PATH_LIST } from "../utils/constants.js";


const WEAPONS_MAP = {
  'weapon-rock': Rock,
  'weapon-paper': Paper,
  'weapon-scissors': Scissors,
}


export default class WeaponSelector extends BaseElement {
  constructor() {
    super();

    this._initElements();
    this._initEventListeners();
  }

  _initElements() {
    this._weaponSelectorContainer = this.root.querySelector('.weapon-selector-container');
    this._weaponsElements = this.root.querySelectorAll('.weapon-item');
  }

  _initEventListeners() {
    this._weaponsElements.forEach(weapon => weapon.addEventListener('click', this._handleWeaponChange.bind(this)));
  }

  _handleWeaponChange(event) {
    this.soundManager.playSoundOnce(SOUND_PATH_LIST.switch);
    this._updateActiveClass(event.currentTarget);
    this.triggerEvent('weapon-selected', { weapon: this._getWeaponFromTarget(event.currentTarget) });
  }

  _updateActiveClass(target) {
    this.root.querySelector('.weapon-item.active').classList.remove('active');
    target.classList.add('active');
  }

  _getWeaponFromTarget(target) {
    const weaponClass = target.classList[1];
    const weapon = new WEAPONS_MAP[weaponClass]();

    return weapon;
  }

  enableElement() {
    this._weaponSelectorContainer.classList.remove('element-disabled');
  }

  disableElement() {
    this._weaponSelectorContainer.classList.add('element-disabled');
  }

  createStyle() {
    return /*html*/`
    <style>
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
        align-items: center;
        justify-content: center;
        margin: 0px 25px 0px 25px;
        cursor: pointer;
        width: 80px;
        height: 65px;
      }

      .weapon-item:hover {
        color: #ffffff;
        background: #774141;
        border-radius: 20px;
      }

      .weapon-item.active {
        background-color: #ff7b7b;
        border-radius: 20px;
      }
      
      .weapon-item img {
        width: 50px;
        height: 50px;
      }

      .element-disabled {
        pointer-events: none;
      }
    </style>
    `;
  }

  createTemplate(style = '') {
    return /*html*/`
    ${style}
    <div class="weapon-selector-container">
      <div class="weapons-container">
        <div class="weapon-item weapon-rock active">
          <img src="assets/img/rock.png">
        </div>
        <div class="weapon-item weapon-paper">
          <img src="assets/img/paper.png">
        </div>
        <div class="weapon-item weapon-scissors">
          <img src="assets/img/scissors.png">
        </div>
      </div>
    </div>
    `;
  }

  disconnectedCallback() {
    this._removeEventListeners();
  }

  _removeEventListeners() {
    if (this._weaponsElements) {
      this._weaponsElements.forEach(weapon => {
        weapon.removeEventListener('click', this._handleWeaponChange.bind(this));
      });
    }
  }
}

customElements.define('weapon-selector', WeaponSelector);