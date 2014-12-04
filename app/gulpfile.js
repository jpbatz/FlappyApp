var gulp = require('gulp');
var sass = require('gulp-sass');

// gulp.task('styles', function () {
//   return gulp.src('./sass/*.scss')
//       .pipe(sass())
//       .pipe(gulp.dest('./css'));
// });

// keeps gulp from crashing for scss errors
gulp.task('styles', function () {
  return gulp.src('./sass/**/*.scss')
      .pipe(sass({
         errLogToConsole: true
      }))
      .pipe(gulp.dest('./public/css'));
});

gulp.task('watch_styles', function () {
  gulp.watch('./sass/**/*.scss', ['styles']);
  gulp.watch('./public/*.html', notifyLiveReload);
  gulp.watch('./public/css/*.css', notifyLiveReload);
  gulp.watch('./public/js/*.js', notifyLiveReload);
});

gulp.task('express', function() {
  var express = require('express');
  var app = express();
  app.use(require('connect-livereload')({port: 35729}));
  app.use(express.static(__dirname + '/public'));
  app.listen(4000);
});

function notifyLiveReload(event) {
  var fileName = require('path').relative(__dirname, event.path);

  tinylr.changed({
    body: {
      files: [fileName]
    }
  });
}

var tinylr;
gulp.task('livereload', function() {
  tinylr = require('tiny-lr')();
  tinylr.listen(35729);
});

gulp.task('default', ['watch_styles','express','livereload']);
