var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');

// todo: android directories: add drawable to gulp.dest
// todo: http://stackoverflow.com/questions/26784094/can-i-use-a-gulp-task-with-multiple-sources-and-multiple-destinations

var sourceDirectory = '/Users/eric/Dropbox/Capture/design/mobile/_output/_sliced/current/src';
var iosOutputDirectory = '/Users/eric/projects/capturelive-ios-assets/assets';
var androidOutputDirectory = '/Users/eric/projects/current-android/current/src/main/res';

// drawable-hdpi
// drawable-mdpi
// drawable-xhdpi
// drawable-xxhdpi
// drawable-xxxhdpi

gulp.task('optimize', function () {
  return gulp.src(sourceDirectory+'/**')
    .pipe(imagemin({
        progressive: true,
        svgoPlugins: [{removeViewBox: false}],
        use: [pngquant()]
    }))
    .pipe(gulp.dest('build'));
});

gulp.task('move-android', ['optimize'], function() {
  return gulp.src('build/android/**')
    .pipe(gulp.dest(androidOutputDirectory));
});

gulp.task('move-ios', ['optimize'], function() {
  return gulp.src('build/ios/**')
    .pipe(gulp.dest(iosOutputDirectory));
});

gulp.task('default', ['optimize', 'move-android', 'move-ios']);
