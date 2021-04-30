'use strict';

// const logger = require('tracer').colorConsole();
const {Builder} = require('selenium-webdriver');
const firefox = require('selenium-webdriver/firefox');
const chrome = require('selenium-webdriver/chrome');
const ie = require('selenium-webdriver/ie');

/**
 * Sets the driver on the given config object
 */
async function build(config) {
    let options;
    let driver;

    switch (config.browser) {
    case 'firefox':
        options = new firefox.Options();
        options.acceptInsecureCerts = true;
        driver = await new Builder()
            .forBrowser('firefox')
            .setFirefoxOptions(options)
            .build();
        break;
    case 'firefox:headless':
        options = new firefox.Options();
        options.acceptInsecureCerts = true;
        options.headless();
        driver = await new Builder()
            .forBrowser('firefox')
            .setFirefoxOptions(options)
            .build();
        break;
    case 'chrome':
        options = new chrome.Options();
        options.acceptInsecureCerts = true;
        driver = await new Builder()
            .forBrowser('chrome')
            .setChromeOptions(options)
            .build();
        break;
    case 'chrome:headless':
        options = new chrome.Options();
        options.acceptInsecureCerts = true;
        options.headless();
        driver = await new Builder()
            .forBrowser('chrome')
            .setChromeOptions(options)
            .build();
        break;
    case 'ie':
        options = new ie.Options();
        options.acceptInsecureCerts = true;
        driver = await new Builder()
            .forBrowser('ie')
            .setIeOptions(options)
            .build();
        break;
    default:
        throw new Error(`Unknown browser "${config.browser}"`);
    }

    return driver;
}

module.exports = {
    build,
};
