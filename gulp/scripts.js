'use strict';

var path = require('path');
var gulp = require('gulp');
var conf = require('./conf');
var $ = require('gulp-load-plugins')({pattern: ['gulp-*']});
var browserSync = require('browser-sync');
var webpack = require('webpack-stream');

/*
concatinate all app specific files into single file and then compile it and move to serving directory
*/ 

function webpackWrapper(watch, callback) {
  var webpackOptions = {
    watch: watch,
    module: {
      loaders: [
        {
          test: /\.js$/,
          exclude: [/node_modules/, /_spec\.js$/],
          loaders: ['ng-annotate', 'babel-loader?presets[]=es2015']
        }
      ]
    },
    output: { filename: 'index.module.js' }
  };

  if(watch) {
    webpackOptions.devtool = 'inline-source-map';
  }

  var webpackChangeHandler = function(err, stats) {
    if(err) {
      conf.errorHandler('Webpack')(err);
    }
    $.util.log(stats.toString({
      colors: $.util.colors.supportsColor,
      chunks: false,
      hash: false,
      version: false
    }));
    browserSync.reload();
    if(watch) {
      watch = false;
      callback();
    }
  };

  var sources = [ path.join(conf.paths.src, '/js/index.module.js') ];

  return gulp.src(sources)
    .pipe(webpack(webpackOptions, null, webpackChangeHandler))
    .pipe(gulp.dest(path.join(conf.paths.public, '/js/')));
}


gulp.task('scripts', function () {
  return webpackWrapper(false, false);
});

gulp.task('scripts:watch', ['scripts'], function (callback) {
  return webpackWrapper(true, callback);
});