'use strict';

// helpers
var IS_DEV_ENV = (process.env.NODE_ENV === 'dev');
var fixPath;
if (IS_DEV_ENV) {
  var path = require('path');
  fixPath = function (basePath, dir) {return path.resolve(basePath, dir)};
} else {
  fixPath = function(basePath, dir) {return basePath + '/' + dir};
}
exports.IS_DEV_ENV = IS_DEV_ENV;

exports.VENDOR_NAME     = 'vendor';
exports.SERVER_NAME     = 'server';
exports.BROWSER_NAME    = 'browser';
exports.WORKER_NAME     = 'worker';
exports.WORKER_APP_NAME = 'worker_app';

exports.HOST = process.env.HOST || 'localhost';
exports.PORT = +process.env.PORT || 3000;

exports.ROOT_DIR    = fixPath('.', '');
exports.SRC_DIR     = fixPath(exports.ROOT_DIR, 'src');
exports.DIST_DIR    = fixPath(exports.ROOT_DIR, 'dist');
exports.PUBLIC_DIR  = fixPath(exports.DIST_DIR, 'public');
exports.PRIVATE_DIR = fixPath(exports.DIST_DIR, 'private');
exports.SERVER_DIR  = fixPath(exports.SRC_DIR,  'server');

exports.SERVER_SOURCE_PATH     = fixPath(exports.SRC_DIR, 'server/server.ts');
exports.BROWSER_SOURCE_PATH    = fixPath(exports.SRC_DIR, 'boot_browser.ts');
exports.WORKER_SOURCE_PATH     = fixPath(exports.SRC_DIR, 'boot_worker.ts');
exports.WORKER_APP_SOURCE_PATH = fixPath(exports.SRC_DIR, 'boot_worker_app.ts');

exports.VENDOR_DLL_MANIFEST_FILE = 'vendor-manifest.json';
exports.VENDOR_DLL_MANIFEST_PATH = fixPath(exports.PUBLIC_DIR, exports.VENDOR_DLL_MANIFEST_FILE);

exports.HAS_SS = true;
exports.HAS_WW = IS_DEV_ENV ? false : true;

exports.SOURCE_MAPS = IS_DEV_ENV ? 'source-map' : false;

exports.PREBOOT = {
  appRoot: 'app',
  freeze:  { name: 'spinner' },
  replay:  'rerender',
  buffer:  true,
  debug:   false,
  uglify:  IS_DEV_ENV ? false : true,
};
