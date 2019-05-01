const gulp = require('gulp');
const sass = require('gulp-sass');
const plumber = require('gulp-plumber');
const rename = require('gulp-rename');
const postcss = require('gulp-postcss');
const csso = require('gulp-csso');
const uglify = require('gulp-uglify');
const htmlmin = require('gulp-htmlmin');
const autoprefixer = require('autoprefixer');
const browserSync = require('browser-sync');
const del = require('del');

function html () {
  return gulp.src('source/**/*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('build/'))
}

function css () {
  return gulp.src('source/sass/style.scss')
    .pipe(plumber())
    .pipe(sass())
    .pipe(csso())
    .pipe(postcss([
      autoprefixer()
    ]))
    .pipe(rename('style.min.css'))
    .pipe(gulp.dest('build/css'))
    .pipe(browserSync.stream());
}

function js () {
  return gulp.src('source/js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('build/js/'))
}

function clean () {
  return del('build');
}

function copy () {
  return gulp.src([
    "source/fonts/**/*.{woff,woff2}",
    "source/img/**/*"
  ], {
    base: "source"
  })
    .pipe(gulp.dest("build"));
}

function server () {
  browserSync.init({
    server: 'build/',
    notify: false,
    open: true,
    cors: true,
    ui: false
  });

  gulp.watch("source/*.html", gulp.series(html, refresh));
  gulp.watch("source/**/*.scss", gulp.series(css));
  gulp.watch("source/js/**/*.js", gulp.series(js, refresh));
}

function refresh (cb) {
  browserSync.reload();
  cb();
}

exports.build = gulp.series(clean, copy, html, css, js);
exports.start = gulp.series(exports.build, server);
