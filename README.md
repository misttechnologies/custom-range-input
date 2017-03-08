## CustomRangeInput

Defines `custom-range-input` element as a custom element using
CustomElement API in WebComponents v1.

---

### Supported browsers

|Device/OS|Browser               |Support|
|-------  |----------------------|-------|
|iOS      |Safari                |:o:    |
|         |Chrome                |:o:    |
|         |SFSafariViewController|:o:    |
|         |WKWebView             |--     |
|         |UIWebView             |--     |
|Android  |Chrome                |:o:    |
|Android  |Stock Browsers        |:x:    |
|Mac/PC   |Safari                |:o:    |
|         |Chrome                |:o:    |
|         |Firefox               |:o:    |
|Windows  |IE 10                 |:x:    |
|         |IE 11                 |:o:    |
|         |Edge 13+              |:o:    |

### Architectures

Implemented utilizing WebComponents v1 spec CustomElements.
However, before distribution of library codes, the sources is designated to be
converted from ES2015 to ES5 using webpack and babel, for browser-compatibility.

On one hand we uses ES5 style scripts in this package, but on the other hand,
ES5 style classes are not compatible with Chrome's CustomElements native
implementation, which requires ES2015-style classes.
Thus [native-shim.js](https://github.com/webcomponents/custom-elements/blob/master/src/native-shim.js)
should be loaded before loading custom-range-input main script.
(See [ES5 vs ES2015](https://github.com/webcomponents/custom-elements#es5-vs-es2015) for more details)

Also, most browsers are providing only partial support for WebComponents v1.
Thus webcomponents/webcomponentsjs polyfills should be adopted.

### Polyfills

- webcomponents/webomponentsjs

Provides polyfills for WebComponents v1. `webcomponents-loader.js` is usefull
because it automatically loads required polyfills.
However, `webcomponents-loader.js` doesn't work on IE11, as it uses ES2015-style
formatting strings, which is not supported by IE11.
We customized `webcomponents-loader.js` and pushed it to our forked
[repo](misttechnologies/webcomponentsjs#custom). If you are to support IE11,
consider using our customized one.

- webcomponents/custom-elements

native-shim

### Customize and build

```bash
npm install
```

npm postinstall script is defined to `npm run submodule && npm run build`
automatically just after `npm install` is done.

When you customize skins, edit: `src/css/style.scss` and run

```bash
npm run build   # Run build script
```

