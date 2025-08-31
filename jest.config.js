'use strict';

module.exports = {
    collectCoverageFrom: ['lib/**/*.js'],
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.js$',
    testPathIgnorePatterns: ['/node_modules/'],
    testEnvironment: 'node',
    collectCoverage: true,
    coverageDirectory: 'coverage',
    coverageReporters: ['lcov', 'text']
};
