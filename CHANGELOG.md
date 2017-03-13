v0.1.0 (2017-03-13)
------------------

* Feature - Travis-CI - Introduced Travis-CI integration, and made dependencies
  more tidy and clear

* Issue - Double-`define` - Fixed double-`define` bug, in which somehow
  `customElements.define` has been called two or more times when the library is
  used on Safari

* Issue - Initial value synchronization - Let the initial property values be
  applied to UI appearance

* Feature - Exposing version - Now we can get the module version by executing
  `CustomRangeInput.version`

v0.1.0-rc.2 (2017-03-10)
------------------

* Feature - `step` property - Elable to specify value updating granularity

* Issue - ShadyCSS styles - Now style rules with `:host` selector is applied
  to host elements on those browsers which lack ShadowDOM feature (e.g. Firefox
  and IE 11) as well. Shadow DOM elements / styles are adapted to those
  browsers by `ShadyCSS.prepareTemplate()`

* Upgrading - Docs / LICENSE - Inserted docs and license statements to top-level
  codes

* Upgrading - Tests - A minimum test with web-component-tester

* Upgrading - npm publishing - Prepared to publish as a npm package

* Issue - Type assertion - `value` property is set after the given value is
  asserted to be number

v0.1.0-rc.1 (2017-03-08)
----------------------

* No changelog entries.
