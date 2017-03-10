/**
 * @license
 * Copyright (c) 2017 Mist Technologies, Inc. All rights reserved.
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * * Redistributions of source code must retain the above copyright notice, this
 *   list of conditions and the following disclaimer.
 *
 * * Redistributions in binary form must reproduce the above copyright notice,
 *   this list of conditions and the following disclaimer in the documentation
 *   and/or other materials provided with the distribution.
 *
 * * Neither the name of the copyright holder nor the names of its
 *   contributors may be used to endorse or promote products derived from
 *   this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
 * FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
 * DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
 * SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
 * CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
 * OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

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

          // Though native shadow DOM spec allows elements to be inserted
          // directly into shadowRoot using innerHTML (without <template>),
          // creating shadow DOM via <template> is required by ShadyCSS to
          // prepare / convert styles so that they can 'shim'.
          const template = document.createElement("template");
          template.innerHTML =
            `
            <style>${require("./../css/style.scss")}</style>
            <div class="bar">
              <div class="loaded"></div>
              <div class="passed"></div>
              <div class="handle"></div>
            </div>
            `;
          if (window.ShadyCSS) {
            // Here styles (e.g. `:host`) go converted
            ShadyCSS.prepareTemplate(template, "custom-range-input");
          }

          // ShadowDOM construction
          this.attachShadow({mode: "open"});
          this.shadowRoot.appendChild(
              document.importNode(template.content, true));
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
            let x = ("changedTouches" in e) ?
              e.changedTouches[0].pageX : e.pageX;
            const rect = this._bar.getBoundingClientRect();
            window.console.assert(rect.right-rect.left > 0);

            this.value =
              (x-rect.left) / (rect.right-rect.left) * (this.max-this.min) +
              this.min;

            /**
             * @event changing
             * dispatched when the value is about to changing
             */
            this.dispatchEvent(
                new CustomEvent("changeing", { detail: this.value }));
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
            this.dispatchEvent(
                new CustomEvent("changed", { detail: this.value }));
          };
        }

        /*********************************************************************
         * Here are attributes and properties managements below.
         * Synchronizing attrs with props.
         *********************************************************************/
        get value( ) { return Number(this.getAttribute("value") || 0.0); }
        set value(v) {               this.setAttribute("value", this._value(v));
          this._passed.style.width = this._handle.style.left =
            100.0 * (this.value - this.min) / (this.max - this.min) + "%";
        }
        get subvalue( ) { return Number(this.getAttribute("subvalue") || 0.0); }
        set subvalue(v) {               this.setAttribute("subvalue", this._value(v));
          this._loaded.style.width =
            100.0 * (this.subvalue - this.min) / (this.max - this.min) + "%";
        }
        get min( )  { return Number(this.getAttribute("min") || 0.0); }
        set min(v)  {               this.setAttribute("min", v); }
        get max( )  { return Number(this.getAttribute("max") || 100.0); }
        set max(v)  {               this.setAttribute("max", v); }
        get step( ) { return Number(this.getAttribute("step") || 0.1); }
        set step(v) {               this.setAttribute("step", v); }

        static get observedAttributes() {
          return ["value", "subvalue", "min", "max", "step"];
        }
        attributeChangedCallback(prop, oldValue, newValue) {
          if (oldValue !== newValue) { this[prop] = newValue; }
        }

        /**
         * @private
         * @method _value
         * @params v {number|string}
         * Regulates the given value `v` to make it stay between `min` and `max`.
         */
        _value(v) {
          const k = Math.pow(10, String(this.step).split(".")[1].length);
          return Math.min(Math.max(
                (Math.round(Number(v) * k) * 1.0) / k,
                this.min), this.max);
        }
      }

  );
}
