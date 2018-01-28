var gulp = require('gulp');
var htmlmin = require('gulp-htmlmin');

gulp.task('minify', function() {
  return gulp.src(['./public/*.html', './public/**/*.html'])
    .pipe(htmlmin({
      removeComments: true,
      minifyCSS: true,
      minifyJS: true,
      collapseWhitespace: true
    }))
    .pipe(gulp.dest('./public'));
});

gulp.task('default', ['minify']);
