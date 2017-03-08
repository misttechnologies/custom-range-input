export default function defineCustomRangeInput() {
  /**
   * Actually CustomRangeInput extends HTMLInputElement (<input> element) but
   * it seems not to work on current browser implementations.
   * Thus we define CustomRangeInput from scratch, extending "plain" HTMLElement
   */
  customElements.define("custom-range-input",

      class CustomRangeInput extends HTMLElement {
        constructor() {
          super();

          // ShadowDOM construction
          this.attachShadow({mode: "open"});
          this.shadowRoot.innerHTML =
            `
            <style>${require("!css-loader!sass-loader!./../css/style.scss")}</style>
            <div class="bar">
              <div class="loaded"></div>
              <div class="passed"></div>
              <div class="handle"></div>
            </div>
            `;
          this._bar    = this.shadowRoot.querySelector(".bar");
          this._loaded = this.shadowRoot.querySelector(".loaded");
          this._passed = this.shadowRoot.querySelector(".passed");
          this._handle = this.shadowRoot.querySelector(".handle");

          this._setupListeners();
        }

        _setupListeners() {
          const _onmd = (e) => {
            document.addEventListener("mousemove", _onmm, false);
            document.addEventListener("mouseup",   _onmu, false);
            document.addEventListener("touchmove", _onmm, false);
            document.addEventListener("touchend",  _onmu, false);
            _onmm(e);
          };
          this.addEventListener("mousedown",  _onmd);
          this.addEventListener("touchstart", _onmd);

          const _onmm = (e) => {
            let x = ("changedTouches" in e) ? e.changedTouches[0].pageX : e.pageX;
            const rect = this._bar.getBoundingClientRect();
            window.console.assert(rect.right-rect.left > 0);

            this.value = this._value(
              (x-rect.left) / (rect.right-rect.left) * (this.max-this.min) +
              this.min);

            /**
             * @event changing
             * dispatched when the value is about to changing
             */
            this.dispatchEvent(new CustomEvent("changeing", { detail: this.value }));
          };

          const _onmu = () => {
            document.removeEventListener("mousemove", _onmm, false);
            document.removeEventListener("mouseup",   _onmu, false);
            document.removeEventListener("touchmove", _onmm, false);
            document.removeEventListener("touchend",  _onmu, false);

            /**
             * @event changed
             * dispatched when a series of value update is ended
             */
            this.dispatchEvent(new CustomEvent("changed", { detail: this.value }));
          };
        }

        /****************************************************************************
         *
         * Here are attributes and properties managements below
         *
         ****************************************************************************/
        get value()     { return Number(this.getAttribute("value") || 0.0); }
        set value(v)    {               this.setAttribute("value", this._value(v));
          this._passed.style.width = this._handle.style.left =
            100.0 * (this.value - this.min) / (this.max - this.min) + "%";
        }
        get subvalue()  { return Number(this.getAttribute("subvalue") || 0.0); }
        set subvalue(v) {               this.setAttribute("subvalue", this._value(v));
          this._loaded.style.width =
            100.0 * (this.subvalue - this.min) / (this.max - this.min) + "%";
        }
        get min()       { return Number(this.getAttribute("min") || 0.0); }
        set min(v)      {               this.setAttribute("min", v); }
        get max()       { return Number(this.getAttribute("max") || 100.0); }
        set max(v)      {               this.setAttribute("max", v); }
        get step()      { return Number(this.getAttribute("step") || 0.1); }
        set step(v)     {               this.setAttribute("step", v); }

        static get observedAttributes() {
          return ["value", "subvalue", "min", "max", "step"];
        }
        attributeChangedCallback(prop, oldValue, newValue) {
          if (oldValue !== newValue) { this[prop] = newValue; }
        }

        _value(v) {
          return Math.min(Math.max(v, this.min), this.max);
        }
      }

  );
}
