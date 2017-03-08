import defineCustomRangeInput from "./src/js/customrangeinput";
/**
 * Actually CustomRangeInput extends HTMLInputElement (<input> element) but
 * it seems not to work on current browser implementations.
 * Thus we define CustomRangeInput from scratch, extending "plain" HTMLElement
 */

// Expecting a polyfill to be loaded
if ("object" === typeof customElements) {
  defineCustomRangeInput();
} else {
  window.addEventListener('WebComponentsReady', () => {
    defineCustomRangeInput();
  });
}
