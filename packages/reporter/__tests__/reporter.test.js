"use strict";

const reporter = require("../lib/reporter");
const assert = require("assert").strict;

assert.strictEqual(reporter(), "Hello from reporter");
console.info("reporter tests passed");
