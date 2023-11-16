const gulp = require('gulp');
const sass = require('gulp-sass')(require('node-sass'));
const sourcemaps = require('gulp-sourcemaps');

gulp.task('sass', function() {
    return gulp.src('src/styles/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle: 'compact'}))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('assets'));
});

gulp.task('watch', function() {
    gulp.watch('src/styles/**/*.scss', gulp.series('sass'));
});