'use strict'
var gulp = require('gulp');
var browserSync = require('browser-sync').create();

var sass = require('gulp-sass')(require('node-sass'));
var rename = require('gulp-rename');
var postcss = require('gulp-postcss');
var sortMediaQueries = require('postcss-sort-media-queries');
var mqpacker = require('css-mqpacker');
var config = require('./config.js');

gulp.task('sass', () => {
    return gulp.src(config.scss, { base: '' })
        .pipe(sass({ outputStyle: 'expanded' }))
        .pipe(postcss([
            mqpacker(),
            sortMediaQueries()
        ]))
        .pipe(rename(function (path) {
            if (config.scss_over_dist) {
                path.dirname = path.dirname + config.scss_over_dist;
            }
        }))
        .pipe(gulp.dest(function (distFile) {
            if (config.scss_over_dist) {
                return distFile.base;
            }
            return config.css_dist;
        }));
});
gulp.task('default', gulp.task('sass'));

gulp.task('sass-watch', () => {
    browserSync.init({
        files: "*",
        server: config.document_root,
        startPath: config.start_page
    });
    gulp.watch(config.scss, gulp.task('sass')).on('change', browserSync.reload);
    gulp.watch(config.html).on('change', browserSync.reload);

    return;
});
gulp.task('watch', gulp.task('sass-watch'));