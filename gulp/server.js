'use strict';

var gulp = require('gulp');
var browserSync = require('browser-sync');
var nodemon = require('gulp-nodemon');
var dotenv = require('dotenv');
dotenv.load({silent: true});


/*
# start server with browsersync on dev mode
*/

// we'd need a slight delay to reload browsers
var BROWSER_SYNC_RELOAD_DELAY = 500;

gulp.task('nodemon', function (cb) {
    var called = false;
    return nodemon({
        script: 'server.js',

        // watch core server file(s) that require server restart on change
        watch: ['server.js', 'routes/**/*.js']
    }).on('start', function onStart() {
            if (!called) {
                cb();
            }
            called = true;
        }).on('restart', function onRestart() {
            // reload connected browsers after a slight delay
            setTimeout(function reload() {
                browserSync.reload({
                    stream: false
                });
            }, BROWSER_SYNC_RELOAD_DELAY);
        });
});

gulp.task('browser-sync', ['nodemon'], function () {
    var node_server = 'http://localhost:' + process.env.NODE_PORT;
    browserSync({
        proxy: node_server,
        port: process.env.PROXY_PORT,
        browser: ['google-chrome']
    });
});

gulp.task('bs-reload', function () {
    browserSync.reload();
});

gulp.task('run', ['clean'], function () {
    gulp.start('serve');
});

gulp.task('serve', ['build', 'browser-sync'], function () {
    gulp.start('watch');
});