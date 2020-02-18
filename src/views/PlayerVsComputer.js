import StartCounter from "../components/StartCounter.js";
import HeadsUpDisplay from "../components/HeadsUpDisplay.js";
import WeaponSelector from "../components/WeaponSelector.js";
import ResultDisplay from "../components/ResultDisplay.js";

class PlayerVsComputer extends HTMLElement {
  constructor() {
    super();
    this.mainComponent = '<start-counter></start-counter>';

    const style = this.createStyle();
    const template = this.createTemplate(style);

    this.attachShadow({ mode: 'open' }).innerHTML = template;
  }

  createStyle() {
    return `
    .player-vs-computer-container {
      background-color: #ffaebd;
      text-align: center;
      margin-bottom: 20px;
      height: 100%;
    }
    `;
  }

  createTemplate(style = '') {
    return /*html*/`
    <style>${style}</style>
    <div class="player-vs-computer-container">
      PLAYER VS COMPUTER

      <heads-up-display></heads-up-display>
      ${this.mainComponent}
      <weapon-selector></weapon-selector>
    </div>
    `;
  }
}

customElements.define('player-vs-computer', PlayerVsComputer);

export default PlayerVsComputer;