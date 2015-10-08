var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');

gulp.task('optimize', function () {
    return gulp.src('src/**')
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        }))
        .pipe(gulp.dest('build'));
});

gulp.task('move-android', ['optimize'], function() {
  return gulp.src('build/android/**')
    .pipe(gulp.dest('/Users/eric/projects/current-android/current/src/main/res'));
});

gulp.task('move-ios', ['optimize'], function() {
  return gulp.src('build/ios/**')
    .pipe(gulp.dest('/Users/eric/projects/capturelive-ios-assets/assets'));
});

// /Users/eric/projects/current-android/current/src/main/res
// /Users/eric/projects/capturelive-ios-assets/assets

gulp.task('default', ['optimize', 'move-android', 'move-ios']);
// gulp.task('default', ['one', 'two']);
