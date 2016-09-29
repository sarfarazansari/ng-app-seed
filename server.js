#!/bin/env node
var dotenv = require('dotenv');
dotenv.load({silent: true});
var settings = require('./routes/util/settings');
var bodyParser = require('body-parser');

global.SRC_DIR = settings.path.resolve(__dirname);

global.REDIRECT_OPTIONS = {
  root: __dirname + '/public',
  dotfiles: 'deny',
  headers:{
    'x-timestamp': Date.now(),
    'x-sent': true
  }
}

// declare routes
var routes = require('./routes/routes');

// app init
var app = settings.express();

//serve some dir
app.use('/public', settings.express.static(__dirname + '/public'));
app.use('/bower_components', settings.express.static(__dirname + '/bower_components'));
app.use(bodyParser.json({limit: '10mb'}));
app.use(bodyParser.urlencoded({ extended: true }));

// view engine setup
app.engine('html', settings.cons.swig)
app.set('views', __dirname+ 'public/');
app.set('view engine', 'html');

// set routes
app.use('/', routes);

/*
 # set all route above this snippet
 # redirecting to 404 if page not found
*/
app.use(redirectUnmatched)
function redirectUnmatched(req, res) {
  res.sendFile('404.html', REDIRECT_OPTIONS)
}

// A shutdown handler to log when we quit.
process.on('exit', function() {
  console.log('%s: INFO - Node server is shutting down.',
    Date(Date.now()));
});

try {
  app.set('port', settings.port);
  app.use(settings.express.static('./public'));

  app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
  });
} catch (err) {
  console.log('%s: ERROR - Problem starting node server%s',
    Date(Date.now()), err);
}


module.exports = app;
