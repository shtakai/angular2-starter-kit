declare var require: any;
declare var __karma__: any;

import 'es6-shim';
import 'es6-promise';
import 'reflect-metadata';
import 'zone.js/dist/zone-microtask';
import 'zone.js/dist/long-stack-trace-zone';
import 'zone.js/dist/jasmine-patch.js';
import 'angular2/core';
import 'angular2/testing';

import {
  setBaseTestProviders,
} from 'angular2/testing';
import {
  TEST_BROWSER_PLATFORM_PROVIDERS,
  TEST_BROWSER_APPLICATION_PROVIDERS,
} from 'angular2/platform/testing/browser';
setBaseTestProviders(TEST_BROWSER_PLATFORM_PROVIDERS, TEST_BROWSER_APPLICATION_PROVIDERS);

const args = __karma__.config.args;
const opts = args[0];

const testsContext = require.context('../src', true, /\.spec\.ts/);

let modules = testsContext.keys();
let testPath = opts.testPath;

if (testPath) {
  testPath = './' + testPath.slice(4);
  modules = modules.filter(modulePath => modulePath.startsWith(testPath));
}

modules.forEach(testsContext);

const domAdapter = require('angular2/src/platform/browser/browser_adapter');
domAdapter.BrowserDomAdapter.makeCurrent();
