'use strict';

const errorcatch = require('..');
const assert = require('assert').strict;

assert.strictEqual(errorcatch(), 'Hello from errorcatch');
console.info('errorcatch tests passed');
