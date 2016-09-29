(function() {

  module.exports.express = require('express');
  module.exports.path = require('path');
  module.exports.router = module.exports.express.Router();
  module.exports.port = process.env.NODE_PORT || 3000;
  module.exports.http = require('http');
  module.exports.path = require('path');
  module.exports.cons = require('consolidate');

}).call(this);
