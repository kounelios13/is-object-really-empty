# is-object-really-empty

Why another module to check if an object is empty?

##Motivation

There quite a lot of modules on NPM which try to answer this simple question; however imho all of these miss the point... So, what is an empty object? It is an object that has not any property (or symbol starting from ES2015).

Of course a function (as many other things in javascript) is an object; and when a function as not attached any property is therefore an empty object; but (I'm looking at you jQuery) I believe that when we ask if something is an empty object, what we really mean is if something is an empty object literal. Surprisingly (or maybe not) currently I couldn't have found any module on npm that answer this question. `is-object-really-empty` is my answer.

##Install

```npm install is-object-really-empty```

use as :

```
var isEmptyObject = require('is-object-really-empty');
isEmptyObject({}); // true
```

##What to expect from `is-object-really-empty`?

You should expect a `true` as response only when you feed it with an empty object literal, (or is verbose form `new Object({})`, if you are in this kind of things); otherwise it will always return `false`.

You could check the test case for the complete list of the edge case we handle; however here there is anyway the list:

* non object literal (`[]`, `function`, `new String("")` and their variations)
* empty object, with non-empty prototype
* object with no properties, but with at least one symbol
