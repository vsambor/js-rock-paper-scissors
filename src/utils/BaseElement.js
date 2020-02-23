import SoundManager from "../utils/SoundManager.js";
import { SOUND_PATH_LIST } from "../utils/constants.js";

export default class BaseElement extends HTMLElement {
  constructor() {
    super();

    this.root = this.attachShadow({ mode: 'open' });
    this.elStyle = this.createStyle();
    this.render();

    this.soundManager = new SoundManager();
  }

  setProperty(name, value) {
    this[name] = value;
    this.onPropertyUpdated(name, value);
  }

  onPropertyUpdated() { }

  triggerEvent(name, detail) {
    const event = new CustomEvent(name, {
      bubbles: true,
      composed: true,
      detail: detail
    });
    this.dispatchEvent(event);
  }

  playClickSound() {
    this.soundManager.playSoundOnce(SOUND_PATH_LIST.click, 0.3);
  }

  playHoverSound() {
    this.soundManager.playSoundOnce(SOUND_PATH_LIST.hover);
  }

  render() {
    this.root.innerHTML = this.createTemplate(this.elStyle);
  }

  createStyle() {
    return '';
  }

  createTemplate(style) {
    return ''
  }
}
