# selenium-test-core

[![NPM version](http://img.shields.io/npm/v/selenium-test-core.svg)](https://www.npmjs.org/package/selenium-test-core)
[![Build Status](https://travis-ci.org/segandiaye/selenium-test-core.svg?branch=master)](https://travis-ci.org/segandiaye/selenium-test-core)

Test your application with selenium easily, without too much cofiguration and without having to install any drivers.

## Installation

```sh
# Using npm
npm install --save selenium-test-core
```

### Supported browsers

* `firefox`
* `firefox:headless`
* `chrome`
* `chrome:headless`
* `ie`

### Example

```js
const {chooseUrlAndBrowser, takeScreenshot} = require('selenium-test-core');

(async() => {
    try {
        await chooseUrlAndBrowser(runTests);
    } catch (err) {
        process.exitCode = 1;
        console.log(err);
    }
})();

async function runTests(helpers) {
  await helpers.start();
  await takeScreenshot('welcome_page', helpers);

  // 2000 is the time to wait for closing the browser
  await helpers.close(2000);
}
```

```sh
# Using npm
npm start NAVIGATOR URL
# In headless
npm start NAVIGATOR:headless URL
```
