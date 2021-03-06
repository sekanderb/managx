var gulp = require('gulp');
var less = require('gulp-less');
var wpPot = require('gulp-wp-pot');
var concat = require('gulp-concat');

var dirs = {
    css: 'assets/css',
    js: 'assets/js',
    less: 'assets/less'
};

gulp.task('less', function() {
    return gulp.src([
            dirs.less+'/bootstrap.less',
            dirs.less+'/style.less'
        ])
        .pipe(less())
        .pipe(concat('style.css'))
        .pipe(gulp.dest(dirs.css))
});

gulp.task('makepot', function () {
    return gulp.src('**/*.php')
        .pipe(wpPot({
            domain: 'managx',
            package: 'ManagX'
        }))
        .pipe(gulp.dest('languages/managx.pot'));
});

gulp.task('default', ['less']);
gulp.task('release', ['less', 'makepot']);
gulp.task('zip', ['clean', 'copy', 'compress']);
