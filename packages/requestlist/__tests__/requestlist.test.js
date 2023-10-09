"use strict";

const requestlist = require("../lib/requestlist");
const assert = require("assert").strict;

assert.strictEqual(requestlist(), "Hello from requestlist");
console.info("requestlist tests passed");
