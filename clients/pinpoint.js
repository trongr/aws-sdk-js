require('../lib/node_loader');
var AWS = require('../lib/core');
var Service = require('../lib/service');
var apiLoader = require('../lib/api_loader');

apiLoader.services['pinpoint'] = {};
AWS.Pinpoint = Service.defineService('pinpoint', ['2016-12-01']);
Object.defineProperty(apiLoader.services['pinpoint'], '2016-12-01', {
  get: function get() {
    var model = require('../apis/pinpoint-2016-12-01.min.json');
    return model;
  },
  enumerable: true,
  configurable: true
});

module.exports = AWS.Pinpoint;
