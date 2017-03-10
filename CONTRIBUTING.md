# Contributing to custom-range-input

We greatly value feedback and contributions from our community. Whether it's a
new feature, correction, or additional documentation, we welcome your pull requests.
Please submit any [issues][] or [pull requests][pull-requests] through GitHub.
Feel free to even play with our repo!

1. Fork this repo
2. Work in a feature branch: `git checkout -b new-feature`
3. Commit changes: `git commit -am 'Add some feature'`
4. Push the branch to your forked repo: `git push origin new-feature`
5. Create a pull request on our original repo

## What you should keep in mind

1. The library is released under the [BSD 3-Clause License][license]. Any code
   you submit will be released under that license. For substantial contributions,
   we may ask you to sign a [Contributor License Agreement (CLA)][cla].
2. Sources under `src/` should be written fully in ES2015 to allow the other
   developers to use them as modules when they develops their larger-level projects.
3. Polyfills should be managed and loaded by the top-level application
   developers, so we refer polyfill using <script> tag but don't bind them into
   'webpack'ed distfile (need more discussion).

## What we are looking for

We are open to anything that improves the library and doesn't unnecessarily
cause backwards-incompatible changes. If you are unsure if your idea is
something we would be open to, please ask us; Open an issue or send us an email.
Specifically, here are a few things that we would appreciate help on:

1. **Docs** – We  greatly appreciate contributions to our documentation.
   The docs are written as code comments.
2. **Tests** –  If there are any tests you feel are missing, please add them
   To be honest, we are not so good at making tests. So **what we are looking
   for most is contributors to testing**, perhaps.
3. **Convenience features** – Are there any features you feel would add value
   to the library? Contributions in this area would be greatly appreciated.
   See the [issue list with enhancement tag][issues] for a list of ideas.
4. If you have some other ideas, please let us know!

## Running the unit tests

The custom-range-input is tested using web-component-tester (a.k.a. wct).
You can run the tests of the library after cloning the repo:

```sh
    npm install
    npm run test
```

If you are having trouble about connecting to selenium, try node@v6.10.0 and
selenium-standalone@3.0.1.


[issues]: https://github.com/misttechnologies/custom-range-input/issues
[pull-requests]: https://github.com/misttechnologies/custom-range-input/pulls
[license]: https://opensource.org/licenses/BSD-3-Clause
[cla]: http://en.wikipedia.org/wiki/Contributor_License_Agreement
