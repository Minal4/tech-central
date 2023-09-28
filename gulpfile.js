const gulp = require('gulp');
const sass = require('gulp-sass')(require('node-sass'));
const minify = require('gulp-minify-css')

function compileSass() {
    return gulp.src('*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('dist/css'));
}

function watch() {
    gulp.watch('*.scss', compileSass);
}

gulp.task('minifycss', () => {
    return gulp.src('dist/css/*.css')
        .pipe(minify())
        .pipe(gulp.dest('dist/css'))
})

exports.compileSass = compileSass;
exports.watch = watch;