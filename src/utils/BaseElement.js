export default class BaseElement extends HTMLElement {
  constructor() {
    super();

    this.root = this.attachShadow({ mode: 'open' });
    this.elStyle = this.createStyle();
    this.render();
  }

  setProperty(name, value) {
    this[name] = value;
    this.render();
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
