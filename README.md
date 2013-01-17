# html-split

Split html in divs

**html-split** only depends on:
*   [jsLib](https://github.com/pfraces/jslib), a general purpose JavaScript
    micro-library
*   [DAL](https://github.com/pfraces/dal), a micro-library for dealing with the
    DOM

Both has been created explicitly for this project, hence they limited set of
features, but can be used on its own offering a simple yet powerful toolset

# Example

```js
run = function () {
  var size = { width: '20em', height: '10em' }
    , tokens = split(dal('content').getHtml(), size)
    , original = dal().color({ bg: 'red', fg: 'white' }).size(size);
    
  for (var i = 0; i < tokens.length; i++)
    dal('split').add(original.clone().html(tokens[tokens.length - (1 + i)]));
}
```
See the complete example at the [examples](https://github.com/pfraces/html-split-examples) repo

## Split it!

Here they are! Splitted and inverted :)

![Split!](https://github.com/pfraces/html-split/raw/master/split.png)

# Install

    $ npm install html-split

# Status

html-split is a work-in-progress and is only intended for my personal use at
this time. 

# API

## split(html, opts)

`html`: _[String: HTML]_ Content to be splitted
`opts`: _[Object]_

*   `opts.width`: Determines the width of the wrapper
*   `opts.height`: Determines the height of the wrapper

# Contribute

Get the sources at github: http://github.com/pfraces/html-split

# License

(The MIT License)

Copyright (c) 2012-2013 [pfraces](http://github.com/pfraces)

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the 'Software'), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
of the Software, and to permit persons to whom the Software is furnished to do
so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
