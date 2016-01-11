var gulp = require('gulp');
var mocha = require('gulp-mocha');

gulp.task('run-tests', function() {
  gulp.src(['test/*.js'], { read: false })
    .pipe(mocha({
      ui: 'bdd'
    }));
});

gulp.task('watch-files', function() {
  gulp.watch(['./*.js', 'test/**/*.js'], ['run-tests']);
});

gulp.task('default', ['run-tests']);
gulp.task('test', ['run-tests', 'watch-files']);
