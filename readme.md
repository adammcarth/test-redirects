### test-redirects

> Write automated tests for your redirects.

[![Build Status](https://travis-ci.org/wayneashleyberry/test-redirects.svg?branch=master)](https://travis-ci.org/wayneashleyberry/test-redirects)

Testing that your web server is configured correctly can be a pain. You want to
make sure your users will always get to the correct content but manually
testing this is slow, tedious and error-prone.

#### Installation

```sh
npm install -g test-redirects
```

#### Usage

```sh
test-redirects
```

The script will look for a file called `test-redirects.json`. This file should
contain an object where the keys are the origin url and values are the expected
destination after being redirected.

```json
{
  "http://npmjs.com": "https://www.npmjs.com/",
  "http://www.npmjs.com": "https://www.npmjs.com/",
  "https://npmjs.com": "https://www.npmjs.com/",
  "https://www.npmjs.com": "https://www.npmjs.com/"
}
```
