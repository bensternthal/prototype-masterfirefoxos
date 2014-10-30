var gulp = require('gulp');
var deploy = require('gulp-gh-pages');
var watch = require('gulp-watch');
var connect = require('gulp-connect');


var sources = {
    overwatch: ['./**/*', '!./node_modules/**']
};

gulp.task('deploy', function () {
    return gulp.src(['./index.html', ])
        .pipe(deploy());
});

gulp.task('serve', function(event) {
    connect.server({
        root: './',
        port: 1987,
        livereload: true
    });

    watch({glob: sources.overwatch})
        .pipe(connect.reload());
});
