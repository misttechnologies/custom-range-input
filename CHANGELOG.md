v0.1.0-rc.2 (2017-03-10)
------------------

* Feature - `step` property - Elable to specify value updating granularity

* Issue - ShadyCSS styles - Now style rules with `:host` selector is applied
  to host elements on those browsers which lack ShadowDOM feature (e.g. Firefox
  and IE 11) as well. Shadow DOM elements / styles are adapted to those
  browsers by `ShadyCSS.prepareTemplate()`.

* Upgrading - Client Classes - Versioned client classes removed, e.g.
  `Aws::S3::Client::V20060301.new` is now `Aws::S3::Client.new` The
  `:api_version` constructor option is no longer accepted.

* Upgrading - Docs / LICENSE - Inserted docs and license statements to top-level
  codes.

* Upgrading - Tests - A minimum test with web-component-tester.

* Upgrading - npm publishing - Prepared to publish as a npm package.

* Issue - Type assertion - `value` property is set after the given value is
  asserted to be number.

v0.1.0-rc.1 (2017-03-08)
----------------------

* No changelog entries.
