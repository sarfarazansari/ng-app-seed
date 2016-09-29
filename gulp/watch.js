'use strict';

var path = require('path');
var gulp = require('gulp');
var conf = require('./conf');


function isOnlyChange(event) {
  return event.type === 'changed';
}



gulp.task('watch', function () {

  gulp.start('scripts:watch');

  gulp.watch(['bower.json'], ['bs-reload']);

  gulp.watch([path.join(conf.paths.src, '/images/*')], ['copy:images']);

  gulp.watch([
    path.join(conf.paths.src, '/**/*.scss')
  ], function(event) {
    if(isOnlyChange(event)) {
      gulp.start('styles-reload');
    } else {
      gulp.start('bs-reload');
    }
  });

  gulp.watch('src/**/*.html', ['inject', 'bs-reload']);

});
