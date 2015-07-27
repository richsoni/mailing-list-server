# A Simple Test Of Fate

A straightforward test suite for node.js

## Installation

```
$  npm install --save-dev simple-test-of-fate
```

# Usage

Set test script:

```
//in package.json
scripts: {
  test: "node ./test/index.js"
}
```

Run tests on invocation:
```
//in test/index.js
stof = require('simple-test-of-fate')
stof.run({
  dir: {DIR} // defaults to ./test/tests
  files: {FILES} //defaults to *.js (is a shell glob like used in find . -name {FILES})
})
```

```
//test/tests/x.js
assert = requrie('assert')
assert(true === false, 'true should be true')
```

# TODO

* Async tests
