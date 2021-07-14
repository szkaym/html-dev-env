'use strict'
var gulp = require('gulp');
var browserSync = require('browser-sync').create();

var sass = require('gulp-sass')(require('node-sass'));
var rename = require('gulp-rename');
var postcss = require('gulp-postcss');
var sortMediaQueries = require('postcss-sort-media-queries');
var mqpacker = require('css-mqpacker');
var typescript = require('gulp-typescript');
var planner = require('gulp-plumber');

var config = require('./config.js');
var routes = require('./api/routes.js');

gulp.task('sass', () => {
    return gulp.src(config.scss, { base: '' })
        .pipe(planner())
        .pipe(sass({ outputStyle: 'expanded' }))
        .pipe(postcss([
            mqpacker(),
            sortMediaQueries()
        ]))
        .pipe(rename(function (path) {
            if (config.css_sibling_dist) {
                path.dirname = path.dirname + config.css_sibling_dist;
            }
        }))
        .pipe(gulp.dest(function (distFile) {
            if (config.css_sibling_dist) {
                return distFile.base;
            }
            return config.css_dist;
        }));
});
gulp.task('sass', gulp.task('sass'));

gulp.task('ts', () => {
    //node_modules配下は除外する
    let tsSrc = config.ts;
    tsSrc.push(...['!./node_modules/**']);
    return gulp.src(tsSrc)
        .pipe(typescript(config.ts_options))
        .pipe(rename(function (path) {
            if (config.js_sibling_dist) {
                path.dirname = path.dirname + config.js_sibling_dist;
            }
        }))
        .pipe(gulp.dest(function (distFile) {
            if (config.js_sibling_dist) {
                return distFile.base;
            }
            return config.js_dist;
        }));
});
gulp.task('ts', gulp.task('ts'));

gulp.task('watch', () => {
    browserSync.init({
        files: "*",
        server: config.document_root,
        startPath: config.start_page,
        middleware: routes
    });

    gulp.watch(config.watch_files).on('change', browserSync.reload);

    if (config.scss_compile) {
        gulp.watch(config.scss, gulp.task('sass')).on('change', browserSync.reload);
    }
    if (config.ts_compile) {
        gulp.watch(config.ts, gulp.task('ts')).on('change', browserSync.reload);
    }

    return;
});
gulp.task('watch', gulp.task('watch'));