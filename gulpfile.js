var gulp = require('gulp'),
  connect = require('gulp-connect'),
  opn = require('opn');

//Local server
gulp.task('connect', function() {
  connect.server({
    root: 'app',
    livereload: true,
    port : 8888
  });
  opn('http://localhost:8888/index.html');
});

//Work with html
gulp.task('html', function () {
  gulp.src('app/*.html')
    .pipe(connect.reload());
});

//Work with css
gulp.task('css', function () {
  gulp.src('app/css/*.css')
    .pipe(connect.reload());
});

//Work with js
gulp.task('js', function () {
  gulp.src('app/js/*.js')
    .pipe(connect.reload());
});

//Watch
gulp.task('watch', function () {
  gulp.watch(['app/*.html'], ['html']);
  gulp.watch(['app/css/*.css'], ['css']);
  gulp.watch(['app/js/*.js'], ['js']);
});

//Default tasks
gulp.task('default', ['connect', 'watch']);