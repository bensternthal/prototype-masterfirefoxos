var deploy = require('gulp-gh-pages');

gulp.task('deploy', function () {
    return gulp.src('./dist/**/*')
        .pipe(deploy(options));
});
