#!/usr/bin/env node
const espree = require('espree');
const config = require('./lib/crconfig');

// eslint-disable-next-line no-console
console.log(13123);

const ast = espree.parse('code', {});
