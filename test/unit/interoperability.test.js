'use strict';

const driverbuilder = require('../../lib/driverbuilder');
const main = require('../../lib/main');

describe('interoperability should be ok', () => {

    test('has interoperability', () => {
        expect(driverbuilder).toHaveProperty('build');

        expect(main).toHaveProperty('chooseUrlAndBrowser');
        expect(main).toHaveProperty('takeScreenshot');
    });

});
