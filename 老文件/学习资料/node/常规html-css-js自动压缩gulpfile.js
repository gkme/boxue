//cnpm install -g gulp //全局安装gulp
//cnpm install --save-dev gulp //安装项目依赖

var gulp = require('gulp');

//压缩html代码
var uglifyhtml = require('gulp-html-minify');
gulp.task('htmlmini', function() {
    return  gulp.src('*.html')
            .pipe(uglifyhtml())
            .pipe(gulp.dest('dist'));
});

//压缩css代码
var uglifycss = require('gulp-minify-css');
gulp.task('cssmini', function() {
    return  gulp.src('css/*.css')
            .pipe(uglifycss())
            .pipe(gulp.dest('dist/css'));
});

//压缩js代码
var uglifyjs = require('gulp-uglify');
gulp.task('jsmini', function() {
    return  gulp.src('js/*.js')
                .pipe(uglifyjs())
                .pipe(gulp.dest('dist/js'));
});


gulp.task('auto', function () {
    gulp.watch('*.html', ['htmlmini']);
    gulp.watch('css/*.css', ['cssmini']);
    gulp.watch('js/*.js', ['jsmini']);
});
gulp.task('default', ['auto']);

//使用的时候直接命令行 gulp即可(自动回开启监听)  