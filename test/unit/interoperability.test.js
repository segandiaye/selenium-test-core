'use strict';

const driverbuilder = require('../../lib/driverbuilder');
const helpers = require('../../lib/helpers');
const main = require('../../lib/main');

describe('interoperability should be ok', () => {

    test('has interoperability', () => {
        expect(driverbuilder).toHaveProperty('build');

        expect(helpers).toHaveProperty('driver');
        expect(helpers).toHaveProperty('start');

        expect(main).toHaveProperty('chooseBrowser');
        expect(main).toHaveProperty('takeScreenshot');
    });

});
