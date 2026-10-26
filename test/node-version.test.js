'use strict';
const test = require('node:test');
const assert = require('node:assert');
test('runs on Node 20 or newer', () => {
  assert.ok(Number(process.versions.node.split('.')[0]) >= 20, `Node ${process.versions.node} is too old`);
});
