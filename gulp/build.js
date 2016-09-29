'use strict';

var path = require('path');
var gulp = require('gulp');
var conf = require('./conf');
var $ = require('gulp-load-plugins')({pattern: ['gulp-*', 'main-bower-files', 'del']});


// move fonts to serving dir
gulp.task('fonts', function () {
  return gulp.src($.mainBowerFiles().concat('bower_components/bootstrap-sass/assets/fonts/bootstrap/*'))
    .pipe($.filter('**/*.{eot,otf,svg,ttf,woff,woff2}'))
    .pipe($.flatten())
    .pipe(gulp.dest(path.join(conf.paths.public, '/fonts/bootstrap/')));
});


/*
copy task separated into multiple task because we are using gulp-inject.
*/

gulp.task('copy:images', function () {
  return gulp.src([path.join(conf.paths.src, '/images/*')])
    .pipe($.copy(conf.paths.public, {prefix: 1}));
});

gulp.task('copy:html', function () {
  gulp.src([path.join(conf.paths.src, '/**/*.html')])
    .pipe($.copy(conf.paths.public, {prefix: 2}));
});


// start server on production mode
gulp.task('prod', ['clean'] ,function () {
  gulp.start('prod:serve');
})

gulp.task('prod:serve', ['default'], function () {
  return $.nodemon({script: 'server.js'})
    .on('start', function onStart() {
      console.log("nodemon server started")
    })
    .on('restart', function onRestart() {
      console.log("nodemon server restarted")
    });
});

// clean all files
gulp.task('clean', function () {
  return $.del([path.join(conf.paths.public, '/*')]);
});

gulp.task('build', ['inject']);

gulp.task('copy', ['copy:html', 'copy:images'])
