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

    this._loaded = this.shadowRoot.querySelector(".loaded");
    this._passed = this.shadowRoot.querySelector(".passed");
    this._handle = this.shadowRoot.querySelector(".handle");
  }

  /****************************************************************************
   *
   * Here are attributes and properties managements below
   *
   ****************************************************************************/
  static get observedAttributes() {
    return [
      "value", "subvalue", "min", "max", "step"
    ];
  }
  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue === newValue) { return; }
    switch(name) {
      case  "value":
        this.value    = newValue; break;
      case  "subvalue":
        this.subvalue = newValue; break;
      case  "min":
        this.min      = newValue; break;
      case  "max":
        this.max      = newValue; break;
      case  "step":
        this.step     = newValue; break;
    }
  }
  get value()     { return this.getAttribute("value") || 0; }
  set value(v)    {        this.setAttribute("value", v);
    // TODO Update css properties
    this._passed.style.width = this._handle.style.left =
      100 * (this.value - this.min) / (this.max - this.min) + "%";
  }
  get subvalue()  { return this.getAttribute("subvalue") || 0; }
  set subvalue(v) {        this.setAttribute("subvalue", v);
    // TODO Update css properties
    this._loaded.style.width =
      100 * (this.subvalue - this.min) / (this.max - this.min) + "%";
  }
  get min()       { return this.getAttribute("min") || 0; }
  set min(v)      {        this.setAttribute("min", v); }
  get max()       { return this.getAttribute("max") || 100; }
  set max(v)      {        this.setAttribute("max", v); }
  get step()      { return this.getAttribute("step") || 0.1; }
  set step(v)     {        this.setAttribute("step", v); }
}
