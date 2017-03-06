import CustomRangeInputGenerator from "./src/js/customrangeinput";
/**
 * Actually CustomRangeInput extends HTMLInputElement (<input> element) but
 * it seems not to work on current browser implementations.
 * Thus we define CustomRangeInput from scratch, extending "plain" HTMLElement
 */
if ("object" === typeof customElements) {
  customElements.define("custom-range-input", CustomRangeInputGenerator());
} else {
  // Expecting a polyfill to be loaded
  window.addEventListener('WebComponentsReady', () => {
    customElements.define("custom-range-input", CustomRangeInputGenerator());
  });
}
