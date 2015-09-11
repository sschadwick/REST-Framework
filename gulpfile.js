'use strict';

var gulp = require('gulp');
var jshint = require('gulp-jshint');
var gulpMocha = require('gulp-mocha');

var filesToWatch = ['server.js', 'index.js', 'test/**/*.js', 'gulpfile.js'];

gulp.task('jshint', function() {
  return gulp.src(filesToWatch)
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task('test', function() {
  return gulp.src('test/**/*test.js')
    .pipe(gulpMocha({reporter: 'nyan'}));
});

gulp.task('default', ['jshint', 'test']);
