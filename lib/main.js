'use strict';

const got = require('got');
const path = require('path');
const parseArgs = require('yargs-parser');
const {writeFile, mkdir} = require('fs').promises;

const helpers_module = require('./helpers');

const ARTIFACTS_PATH_SCREENSHOTS = 'screenshots';

const config = {};

const args = parseArgs(process.argv.slice(2));

/**
 * @param {Promise} runTests
 * @param {Object} config
 * @returns {Promise}
 */
async function chooseUrlAndBrowser(runTests) {
    if (args._.length != 2) {
        printUsage();
        throw new Error('Wrong number of arguments');
    }

    config.browser = args._[0].toLowerCase();
    config.url = args._[1].toLowerCase();
    // --headless option
    config.headless = args.headless;

    await got(config.url);

    const helpers = await helpers_module(config);

    await runTests(helpers);
}

function printUsage() {
    // eslint-disable-next-line no-console
    console.log(`
Usage:
$ npm start BROWSER URL

Examples:
$ npm start firefox url
$ npm start firefox:headless url

$ npm start chrome url
$ npm start chrome:headless url

$ npm start firefox url

$ npm start firefox url

$ npm start firefox url
                 `);
}

async function takeScreenshot(action_name, helpers) {
    const d = new Date();
    const base64_encoded_png = await helpers.driver.takeScreenshot();
    await ensureDir(ARTIFACTS_PATH_SCREENSHOTS);
    await writeFile(path.join(ARTIFACTS_PATH_SCREENSHOTS,
        `${action_name}_${Date.parse(d)}.png`), base64_encoded_png, 'base64');
}

async function ensureDir(dir_path) {
    await mkdir(dir_path, {recursive: true});
}

module.exports = {
    chooseUrlAndBrowser,
    takeScreenshot,
};
