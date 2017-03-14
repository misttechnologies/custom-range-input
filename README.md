# CustomRangeInput
[![npm version](https://badge.fury.io/js/custom-range-input.svg)](https://badge.fury.io/js/custom-range-input)
[![Build Status](https://travis-ci.org/misttechnologies/custom-range-input.svg?branch=master)](https://travis-ci.org/misttechnologies/custom-range-input)
[![BSD 3-Clause License](https://img.shields.io/badge/license-BSD3-blue.svg?style=flat)][LICENSE]
[![Code Climate](https://codeclimate.com/github/misttechnologies/custom-range-input/badges/gpa.svg)](https://codeclimate.com/github/misttechnologies/custom-range-input)

Defines `custom-range-input` element as a custom element using
CustomElement API in WebComponents v1 and its polyfills.

---

## How it looks like

![Demo](http://i.imgur.com/qm1zwvL.png)

## Supported browsers

|Device/OS   |Browser               |Support|
|------------|----------------------|-------|
|iOS 9+      |Safari                |:o:    |
|            |Chrome                |:o:    |
|            |SFSafariViewController|:o:    |
|            |WKWebView             |--     |
|            |UIWebView             |--     |
|Android 4.4+|Chrome                |:o:    |
|Android *   |Stock Browsers        |:x:    |
|Mac/PC      |Safari 9+             |:o:    |
|            |Chrome 38+            |:o:    |
|            |Firefox 31+           |:o:    |
|Windows     |IE 10                 |:x:    |
|            |IE 11                 |:o:    |
|            |Edge 13+              |:o:    |

## Architecture

Implemented utilizing WebComponents v1 spec CustomElements.
However, before distribution of library codes, the sources is designated to be
converted from ES2015 to ES5 using webpack and babel, for browser-compatibility.

On one hand the built libraly is a ES5 style script, but on the other hand,
ES5 style classes are not compatible with native (Chrome's) CustomElements v1
implementation, which requires ES2015-style classes.
Thus [native-shim.js](https://github.com/webcomponents/custom-elements/blob/master/src/native-shim.js)
should be loaded before loading custom-range-input main script.
(See [ES5 vs ES2015](https://github.com/webcomponents/custom-elements#es5-vs-es2015) for more details)

Also, most browsers currently provides only partial support for WebComponents v1.
For those browsers, webcomponents/webcomponentsjs polyfills should be adopted.

## Polyfills

- webcomponents/webomponentsjs

Provides polyfills for WebComponents v1. `webcomponents-loader.js` is usefull
because it automatically loads required polyfills.
However, `webcomponents-loader.js` doesn't work on IE11, as the loader is
written in ES2015-style, which is partially not supported by IE11.
We customized `webcomponents-loader.js` to make it work on IE11 and pushed it to
our forked [repo](misttechnologies/webcomponentsjs#custom).
Consider using our customized one if needed.

- webcomponents/custom-elements

Unfortunately our built libraly script in ES5 is not compatible with native CustomElement v1
implementation. To handle this (i.e. on Chrome),
[native-shim.js](https://github.com/webcomponents/custom-elements/blob/master/src/native-shim.js)
should be loaded before defining custom-range-input custom element.
See [ES5 vs ES2015](https://github.com/webcomponents/custom-elements#es5-vs-es2015) for more details.

## Usage

Actual usage of this library looks like this below.

```html
<!-- loading polyfills -->
<script src="./vendor/webcomponentsjs/webcomponents-loader.js"></script>
<script src="./vendor/custom-elements/src/native-shim.js"></script>

<!-- loading the library -->
<script src="./dist/customrangeinput.js"></script>

<!-- here is custom element tag!! -->
<custom-range-input type="range" is="custom-range-input"
                    min="-5" max="15" step="0.1"
                    value="0" subvalue="10">
</custom-range-input>
```

## Development environment

For just a reference, this is our development environment

* (nvm - Node Version Manager)

* node@6.10.0

* npm@3.10.10

* selenium-standalone@6.0.1

## Customize and build

```sh
git clone https://github.com/misttechnologies/custom-range-input
npm install
```

npm postinstall script is defined to `npm run submodule && npm run build`
automatically just after `npm install` is done.

When you customize skins, edit: `src/css/style.scss` and run

```sh
npm run build   # Run build script
```

To run tests,

```sh
npm test
```

Make sure your node version is ^6.0.0 to run tests.
Also selenium-standalone is required to be installed blobally to run tests.

```sh
npm install -g selenium-standalone@6.0.1
```

We confirmed that selenium-standalone@6.0.1 works with our project.

## Contributing

See [CONTRIBUTING.md][] file

## Author

![Photo](https://avatars0.githubusercontent.com/u/1808432?v=3&s=80)
[Shintaro Tanaka](https://github.com/qpSHiNqp/)

## License

[BSD 3-Clause License][license]

[license]: https://opensource.org/licenses/BSD-3-Clause
[CONTRIBUTING.md]: https://github.com/misttechnologies/custom-range-input/blob/master/CONTRIBUTING.md
