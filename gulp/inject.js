'use strict';

var path = require('path');
var gulp = require('gulp');
var conf = require('./conf');
var wiredep = require('wiredep').stream;
var _ = require('lodash');
var $ = require('gulp-load-plugins')({pattern: ['gulp-*']});

/* 
* inject app specifil files by gulp-inject
* inject bower specific files by wiredep
*/

gulp.task('inject', ['copy' ,'scripts', 'styles'], function () {

  var injectStyles = gulp.src([
    path.join(conf.paths.public, '/**/*.css')
  ], { read: false });

  var injectScripts = gulp.src([
    path.join(conf.paths.public, '/js/*.js')
  ], { read: false });

  var injectOptions = {
    ignorePath: [conf.paths.src],
    addRootSlash: true
  };

  return gulp.src(path.join(conf.paths.public, '/*.html'))
    .pipe($.inject(injectStyles, injectOptions))
    .pipe($.inject(injectScripts, injectOptions))
    .pipe(wiredep(_.extend({}, conf.wiredep)))
    .pipe(gulp.dest(path.join(conf.paths.public, '/')));
});


