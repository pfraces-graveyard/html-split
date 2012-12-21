# html-split

Split html in divs

**html-split** only depends on [DAL](https://github.com/pfraces/dal) a micro
library for dealing with the DOM

**DAL** has been created explicitly for this project, so more than a
dependency is its standard library

# Example

Shows the use of **html-split** and **DAL** in combination

```html
<div id="content">
  <h1>Welcome to html-split</h1>
  <p>Some text here</p>
  <div id="foo">
    <h1>Another title</h1>
    <p>With weird text about nothing</p>
  </div>
  <h2>Finaly a subtitle</h2>
  <p>with final content</p>
</div>

<script src="dal.js">
<script src="html-split.js">
```

```js
var size = { width: '20em', height: '10em' }
  , tokens = split(document.body.innerHTML, size)
  , original = dal().color('red', 'white').size(size);
  
for (token in tokens) original.clone().html(tokens[token]).draw();
```

## Split!

![splitted!](https://github.com/pfraces/html-split/raw/master/splitted.png)

# Install

    $ npm install html-split

# Status

html-split is a work-in-progress and is only intended for my personal use at
this time. 

# API

## split(html, opts)

`opts` is an object with the following properties:

*   **width:** Determines the width of the wrapper
*   **height:** Determines the height of the wrapper

# Contribute

Get the sources at github: http://github.com/pfraces/html-split

# License

(The MIT License)

Copyright (c) 2012 [pfraces](http://github.com/pfraces)

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
