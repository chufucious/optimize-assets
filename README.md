# optimize-assets
This gulp task takes the asset output from Generate Mobile Assets in the Sketch plugin [sketch-mobile-assets](https://github.com/pixi-stix/sketch-mobile-assets/), optimizes them, and then sorts them in the output folders for iOS and Android that you define.

###### You should use this if:
* You use Sketch
* You are designing for iOS and Android at the same time (one file creates assets for both platforms)
* You use `sketch-mobile-assets` to export your assets
* You are familiar with the command line, NPM, and Gulp

### Install gulp
Install gulp with [these instructions](https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md)

### Install these NPM packages
* `npm install gulp-imagemin`
* `npm install imagemin-pngquant`
* `npm install merge-stream`

### Edit config.json and define these paths
* `source` absolute path to your asset output folder (where you save your assets from Generate Mobile Assets)
* `ios` absolute path to your asset directory for your iOS project
* `android` absolute path to your asset directory for your Android project. optimize-assets will sort the files into the appropriate `drawable` Android folders

### Now, run gulp!
In the directory that contains `gulpfile.js`, run `gulp` in the terminal

Oh yeah!!!
