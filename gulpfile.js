'use strict';

var gulp = require('gulp');
var async = require('async');
var template = require('gulp-template');
var scaffolds = require('./scaffolds');

/**
 * Generate a single "target"
 */

gulp.task('one', function(cb) {
  async.each(scaffolds.one.files, function(file, next) {
    gulp.src(file.src)
      .pipe(template(file.data))
      .pipe(gulp.dest(file.dest))
      .on('error', next)
      .on('end', next);
  }, cb);
});

/**
 * Generate all "targets" in the scaffold
 */

gulp.task('two', function(done) {
  async.eachOf(scaffolds.two, function(target, name, cb) {
    async.each(target.files, function(config, next) {
      gulp.src(config.src, config.options)
        .pipe(template(target.data))
        .pipe(gulp.dest(config.dest))
        .on('error', next)
        .on('end', next);
    }, cb);
  }, done);
});

gulp.task('default', ['one', 'two']);
