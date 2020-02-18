import BaseElement from "../utils/BaseElement.js";
import StartCounter from "../components/StartCounter.js";
import HeadsUpDisplay from "../components/HeadsUpDisplay.js";
import WeaponSelector from "../components/WeaponSelector.js";
import ResultDisplay from "../components/ResultDisplay.js";

const START_COUNTER_TAG = '<start-counter id="counter-element"></start-counter>';
const RESULT_DISPLAY_TAG = '<result-display></result-display>';

class PlayerVsComputer extends BaseElement {
  constructor() {
    super();
    this.mainComponent = START_COUNTER_TAG;
    this.render();

    this.root.getElementById('counter-element').addEventListener('counter-done', () => {
      this.mainComponent = RESULT_DISPLAY_TAG;
      this.render();
    });
  }

  createStyle() {
    return `
    .player-vs-computer-container {
      background-color: #ffaebd;
      text-align: center;
      margin-bottom: 20px;
      height: 100%;
    }

    .player-vs-computer-container h4 {
      margin: 0;
      padding: 10px;
    }
    `;
  }

  createTemplate(style = '') {

    return /*html*/`
    <style>${style}</style>
    <div class="player-vs-computer-container">
      <h4>PLAYER VS COMPUTER</h4>

      <heads-up-display></heads-up-display>
      ${this.mainComponent}
      <weapon-selector></weapon-selector>
    </div>
    `;
  }
}

customElements.define('player-vs-computer', PlayerVsComputer);

export default PlayerVsComputer;