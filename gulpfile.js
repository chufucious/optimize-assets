var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');
var merge = require('merge-stream');
var config = require('config.js');

gulp.task('optimize', function () {
  return gulp.src(sourcePath+'/**')
    .pipe(imagemin({
        progressive: true,
        svgoPlugins: [{removeViewBox: false}],
        use: [pngquant()]
    }))
    .pipe(gulp.dest('build'));
});

gulp.task('move-android', ['optimize'], function() {

  var hdpi = gulp.src('build/android/hdpi/**')
    .pipe(gulp.dest(androidOutputPath+'/drawable-hdpi'));

  var mdpi = gulp.src('build/android/mdpi/**')
    .pipe(gulp.dest(androidOutputPath+'/drawable-mdpi'));

  var xhdpi = gulp.src('build/android/xhdpi/**')
    .pipe(gulp.dest(androidOutputPath+'/drawable-xhdpi'));

  var xxhdpi = gulp.src('build/android/xxhdpi/**')
    .pipe(gulp.dest(androidOutputPath+'/drawable-xxhdpi'));

  var xxxhdpi = gulp.src('build/android/xxxhdpi/**')
    .pipe(gulp.dest(androidOutputPath+'/drawable-xxxhdpi'));

  return merge(hdpi, mdpi, xhdpi, xxhdpi, xxxhdpi);
});

gulp.task('move-ios', ['optimize'], function() {
  return gulp.src('build/ios/**')
    .pipe(gulp.dest(iosOutputPath));
});

gulp.task('default', ['optimize', 'move-android', 'move-ios']);
