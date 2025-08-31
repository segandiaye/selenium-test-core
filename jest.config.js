'use strict';

module.exports = {
    collectCoverageFrom: [
        'lib'
    ],
    collectCoverage: true,
    coverageDirectory: 'coverage',
    coverageReporters: ['lcov', 'text']
};
