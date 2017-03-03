import CustomRangeInput from "./src/js/customrangeinput";
/**
 * Actually CustomRangeInput extends HTMLInputElement (<input> element) but
 * it seems not to work on current browser implementations.
 * Thus we define CustomRangeInput from scratch, extending "plain" HTMLElement
 */
customElements.define("custom-range-input", CustomRangeInput);
