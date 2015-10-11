# optimize-assets
This gulp task takes the asset output from Generate Mobile Assets in the Sketch plugin [sketch-mobile-assets](https://github.com/pixi-stix/sketch-mobile-assets/), optimizes them, and then sorts them in the output folders for iOS and Android that you define.

### Install gulp
Install gulp with [these instructions](https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md)

### Install these NPM packages
* `npm install --save-dev gulp-imagemin`
* `npm install --save-dev imagemin-pngquant`
* `npm install --save-dev merge-streams`

### Edit gulpfile.js and define these paths
* `sourcePath` absolute path to your asset output folder (where you save your assets from Generate Mobile Assets)
* `iosOutputPath` absolute path to your asset directory for your iOS project
* `androidOutputPath` absolute path to your asset directory for your Android project

### Now, run gulp!
`gulp`

Oh yeah!!!
