var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');

// gulp.task('copy', ['clean'], function () {
//       return gulp.src(['src/ios/**/*', 'src/android/**/*'], {
//         base: 'src'

//       // .pipe(imagemin({
//       //     progressive: true,
//       //     svgoPlugins: [{removeViewBox: false}],
//       //     use: [pngquant()]
//       // }))
//       .pipe(gulp.dest('build'));
// });

          gulp.task('copy', ['clean'], function () {
        return gulp.src(['src/public/**/*', 'src/vendor/**/*'], {
            base: 'src'
        }).pipe(gulp.dest('build'));
    });