// cnpm install -g gulp 
// cnpm install --save-dev gulp 
// cnpm install gulp-uglify
// cnpm install gulp-clean-css
// cnpm install gulp-rename


var gulp = require("gulp");
var uglify = require('gulp-uglify');
var cleanCSS = require('gulp-clean-css'); 
var rename = require("gulp-rename");

gulp.task('jscompress', function() {
   return gulp.src('js/*.js')
        .pipe(rename({suffix: '.min'}))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
});
gulp.task('csscompress', function() {
   return gulp.src('css/*.css')
        .pipe(rename({suffix: '.min'}))
        .pipe(cleanCSS())
        .pipe(gulp.dest('dist/css'));
});
gulp.task('auto', function () {
    gulp.watch('js/*.js', ['jscompress']);
    gulp.watch('css/*.css', ['csscompress']);
});
gulp.task('default', ['auto']);

//最后执行gulp即可