## Some policies

- Sources under `src/` should be written fully in ES2015 to allow the other developers to use them as modules when they develops their larger-level projects.
- Polyfills should be managed and loaded by the top-level application developers, so we refer polyfill using <script> tag but don't bind them into 'webpack'ed distfile (need more discussion).

WIP: writing this
