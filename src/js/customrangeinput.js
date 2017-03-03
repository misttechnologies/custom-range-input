/**
 * Actually CustomRangeInput extends HTMLInputElement (<input> element) but
 * it seems not to work on current browser implementations.
 * Thus we define CustomRangeInput from scratch, extending "plain" HTMLElement
 */
export default class CustomRangeInput extends HTMLElement {
  constructor() {
    super();

    const ELEMENTS = require("./../html/fragment.html");
    const STYLES   = require("./../css/style.scss");

    // ShadowDOM construction
    this.attachShadow({mode: "open"});
    this.shadowRoot.innerHTML = "<style>" + STYLES + "</style>" + ELEMENTS;

    this._handle = this.shadowRoot.querySelector(".handle");
  }
}
