import BaseElement from "../utils/BaseElement.js";
import Rock from "../models/weapons/Rock.js";
import Paper from "../models/weapons/Paper.js";
import Scissors from "../models/weapons/Scissors.js";


const WEAPONS_MAP = {
  'weapon-rock': Rock,
  'weapon-paper': Paper,
  'weapon-scissors': Scissors,
}


export default class WeaponSelector extends BaseElement {
  constructor() {
    super();

    this._listenToWeaponChange();
  }

  _listenToWeaponChange() {
    const weapons = this.root.querySelectorAll('.weapon-item');

    weapons.forEach(element => element.addEventListener('click', this._handleWeaponChange.bind(this)));
  }

  _handleWeaponChange(event) {
    this._updateActiveClass(event.currentTarget);

    const weaponClass = event.currentTarget.classList[1];
    this._triggerWeaponSelected(new WEAPONS_MAP[weaponClass]());
  }

  _updateActiveClass(target) {
    this.root.querySelector('.weapon-item.active').classList.remove('active');
    target.classList.add('active');
  }

  _triggerWeaponSelected(weapon) {
    const weaponSelectedEvent = new CustomEvent('weapon-selected', {
      bubbles: true,
      composed: true,
      detail: {
        weapon: weapon
      }
    });

    this.dispatchEvent(weaponSelectedEvent);
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

      .weapon-item.active {
        background-color: #ff7b7b;
      }
      
      .weapon-item img {
        width: 50px;
        height: 50px;
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
          <img src="images/rock.png">
        </div>
        <div class="weapon-item weapon-paper">
          <img src="images/paper.png">
        </div>
        <div class="weapon-item weapon-scissors">
          <img src="images/scissors.png">
        </div>
      </div>
    </div>
    `;
  }
}

customElements.define('weapon-selector', WeaponSelector);