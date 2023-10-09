"use strict";

const performancemonitor = require("../lib/performancemonitor");
const assert = require("assert").strict;

assert.strictEqual(performancemonitor(), "Hello from performancemonitor");
console.info("performancemonitor tests passed");
