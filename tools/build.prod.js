'use strict';

const os = require('os');
const webpack = require('webpack');
const configs = require('../webpack.prod.config.js');
const constants = require('../constants');

const EOL = os.EOL;

const VENDOR_CONFIG     = configs.VENDOR_CONFIG;
const SERVER_CONFIG     = configs.SERVER_CONFIG;
const BROWSER_CONFIG    = configs.BROWSER_CONFIG;
const WORKER_CONFIG     = configs.WORKER_CONFIG;
const WORKER_APP_CONFIG = configs.WORKER_APP_CONFIG;

const STATS_OPTIONS = configs.STATS_OPTIONS;

let projectConfigs = [SERVER_CONFIG, BROWSER_CONFIG];
if (constants.HAS_WW) {
  projectConfigs = [...projectConfigs, WORKER_CONFIG, WORKER_APP_CONFIG];
}

function printStats(stats) {
  process.stdout.write(EOL + stats.toString(STATS_OPTIONS) + EOL);
}

// build vendor
webpack(VENDOR_CONFIG, function(vendorError, vendorStats) {
  if (vendorError) {
    throw vendorError;
  }
  printStats(vendorStats);

  // build app
  webpack(projectConfigs, function (projectError, projectStats) {
    if (projectError) {
      throw projectError;
    }
    printStats(projectStats);
  });

});
