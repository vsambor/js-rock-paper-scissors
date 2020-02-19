export default class BaseElement extends HTMLElement {
  constructor() {
    super();

    this.root = this.attachShadow({ mode: 'open' });
    this.elStyle = this.createStyle();
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

  // connectedCallback() {
  //   console.log('connected!');
  // }

  // disconnectedCallback() {
  //   console.log('disconnected!');
  // }

  // attributeChangedCallback(name, oldVal, newVal) {
  //   console.log(`Attribute: ${name} changed!`);
  // }
}