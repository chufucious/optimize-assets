var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');
var outputType = ['hdpi', 'mdpi', 'xhdpi', 'xxhdpi', 'xxxhdpi'];
var config = "./config.json";

gulp.task('optimize', function () {
  return gulp.src(sourcePath+'/**')
    .pipe(imagemin({
        progressive: true,
        svgoPlugins: [{removeViewBox: false}],
        use: [pngquant()]
    }))
    .pipe(gulp.dest('build'));
});

var moveAsset = function(type){
  return gulp.src('build/android/'+type+'/**')
    .pipe(gulp.dest(androidOutputPath+'/drawable-'+type));
};

gulp.task('move-android', ['optimize'], function() {
  return outputType.forEach(function(type){
      return moveAsset(type);
    });
});

gulp.task('move-ios', ['optimize'], function() {
  return gulp.src('build/ios/**')
    .pipe(gulp.dest(iosOutputPath));
});

gulp.task('default', ['optimize', 'move-android', 'move-ios']);
