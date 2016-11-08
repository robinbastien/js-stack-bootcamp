/* eslint-disable import/no-extraneous-dependencies */
import gulp from "gulp";
import babel from "gulp-babel";
import del from "del";
import eslint from "gulp-eslint";
import webpack from "webpack-stream";
import webpackConfig from "./webpack.config.babel";

const paths = {
	allSrcJs: "src/**/*.js",
	serverSrcJs: "src/server/**/*.js?(x)",
	serverSrcJs: "src/shared/**/*.js?(x)",
	clientEntryPoint: "src/client/app.js",
	gulpFile: "gulpfile.babel.js",
	webpackFile: "webpack.config.babel.js",
	libDir: "lib",
	distDir : "dist"
};

/* Remove everything in 'lib' dir. This is where the
 * compiled ES5 code resides, taken from the ES6 code in
 * the 'src' dir.
 */
gulp.task("clean", () => del( paths.libDir ));

/* Check all the things for issues! Including this
 * file itself...so meta.
 */
gulp.task("lint", () =>
  gulp.src([
    paths.allSrcJs,
    paths.gulpFile,
    paths.webpackFile,
  ]).pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError())
);

/* This is the real deal. It runs lint, clean, then
 * builds the project whilst converting ES6 to
 * ES5, plopping it to paths.libDir ('lib').
 */
gulp.task("build", ["lint","clean"], () =>
  gulp.src( paths.allSrcJs )
  .pipe(babel())
  .pipe( gulp.dest( paths.libDir ) )
);

/* This is the main task that tells terminal to
 * run node, using the build task. 'exec' is built
 * into node to interface with the terminal.
 */
gulp.task("main", ["lint","clean"], () =>
  gulp.src(paths.clientEntryPoint)
  .pipe(webpack(webpackConfig))
  .pipe(gulp.dest(paths.distDir))
);

/* Watches for changes, calling the 'main' task
 * again to clean and rebuild
 */
gulp.task('watch', () => {
  gulp.watch(paths.allSrcJs, ['main']);
});


/* Set the default gulp task to 'watch'
 */
gulp.task('default', ['watch','main']);
