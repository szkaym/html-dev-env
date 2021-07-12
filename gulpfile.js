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

function sass() {
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
}
exports.default = sass;

function ts() {
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
}
exports.ts = ts;

gulp.task('watch', () => {
    browserSync.init({
        files: "*",
        server: config.document_root,
        startPath: config.start_page
    });

    gulp.watch(config.scss, gulp.task('sass')).on('change', browserSync.reload);
    gulp.watch(config.html).on('change', browserSync.reload);
    gulp.watch(config.ts, gulp.task('ts')).on('change', browserSync.reload);

    return;
});
gulp.task('watch', gulp.task('watch'));