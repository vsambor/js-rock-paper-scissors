export default class BaseElement extends HTMLElement {
  constructor() {
    super();

    this.root = this.attachShadow({ mode: 'open' });
    this.elStyle = this.createStyle();
    this.render();
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
