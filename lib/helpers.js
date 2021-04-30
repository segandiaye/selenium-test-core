'use strict';

const driverbuilder = require('./driverbuilder');

let config;
let driver;

async function start() {
    await driver.get(config.url);
    await driver.sleep(2000);
}

module.exports = async(config_obj) => {
    config = config_obj;
    driver = await driverbuilder.build(config);

    return {
        driver,
        start,
    };
};
