import * as fs from 'fs';
import { create as bsCreate } from 'browser-sync';
import * as del from 'del';
import * as gulp from 'gulp';
import * as autoprefixer from 'gulp-autoprefixer';
import * as ghPages from 'gulp-gh-pages';
import * as imagemin from 'gulp-imagemin';
import * as inject from 'gulp-inject';
import * as plumber from 'gulp-plumber';
import * as sass from 'gulp-sass';
import * as sourcemaps from 'gulp-sourcemaps';
import * as ts from 'gulp-typescript';
import * as nodeSass from 'node-sass';
import * as webpack from 'webpack-stream';

const browserSync = bsCreate();
(sass as any).compiler = nodeSass;

const cleanTask = () => del(['dist']);
const cleanCss = () => del(['dist/css']);
const cleanJs = () => del(['dist/js']);
const cleanTs = () => del(['dist/ts']);

const sassRenameTask = async(callback: Function) => {
  await new Promise<void>((res, rej) => fs.rename('dist/sass', 'dist/css', (err) => {
    if (err) {
      rej(err);
    }
    res();
  }));
  return callback();
};

const imageTask = () => gulp.src('src/images/**/*.*')
  .pipe(imagemin())
  .pipe(gulp.dest('dist/images'));

const sassBuildTask = () => gulp.src('src/**/*.scss')
  .pipe(plumber())
  .pipe(sourcemaps.init())
  .pipe(sass().on('error', sass.logError))
  .pipe(autoprefixer({ cascade: false }))
  .pipe(sourcemaps.write())
  .pipe(gulp.dest('dist'))
  .pipe(browserSync.stream());
const sassBuildProdTask = () => gulp.src('src/**/*.scss')
  .pipe(plumber())
  .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
  .pipe(autoprefixer({ cascade: false }))
  .pipe(gulp.dest('dist'));
const sassBuildSeriesTask = gulp.series(cleanCss, sassBuildTask, sassRenameTask);
const sassBuildProdSeriesTask = gulp.series(cleanCss, sassBuildProdTask, sassRenameTask);

const jsCompileTask = () => {
  const tsProject = ts.createProject('tsconfig.json');
  return gulp.src('./src/**/*.ts')
    .pipe(plumber())
    .pipe(tsProject()).js
    .pipe(gulp.dest('dist'));
};
const jsBundleTask = () => gulp.src('./dist/**/*.js')
  .pipe(plumber())
  .pipe(webpack({
    output: { filename: 'main.js' },
    devtool: 'source-map',
    mode: 'development'
  }))
  .pipe(gulp.dest('dist/js'));
const jsBundleProdTask = () => gulp.src('./dist/**/*.js')
  .pipe(plumber())
  .pipe(webpack({
    output: { filename: 'main.js' },
    mode: 'production'
  }))
  .pipe(gulp.dest('dist/js'));
const jsBuildSeriesTask = gulp.series(cleanJs, jsCompileTask, jsBundleTask, cleanTs);
const jsBuildProdSeriesTask = gulp.series(cleanJs, jsCompileTask, jsBundleProdTask, cleanTs);

const htmlCopyTask = () => gulp.src('./src/**/*.html')
  .pipe(gulp.dest('./dist'));
const htmlInjectDependenciesTask = () => gulp.src('./dist/**/*.html')
  .pipe(inject(gulp.src(['./dist/**/*.js', './dist/**/*.css'], { read: false }), { relative: true }))
  .pipe(gulp.dest('./dist'));
const htmlBuildTask = gulp.series(htmlCopyTask, htmlInjectDependenciesTask);

const buildTask = gulp.series(cleanTask, sassBuildSeriesTask, jsBuildSeriesTask, htmlBuildTask, imageTask);
const buildProdTask = gulp.series(cleanTask, sassBuildProdSeriesTask, jsBuildProdSeriesTask, htmlBuildTask, imageTask);
const deployTask = () => gulp.src('./dist/**/*').pipe(ghPages({ force: true }));

const watchFileChangesTask = () => {
  gulp.watch('src/**/*.scss', sassBuildSeriesTask);
  gulp.watch('src/**/*.html').on('all', gulp.series(htmlBuildTask, browserSync.reload));
  gulp.watch('src/**/*.ts').on('all', gulp.series(jsBuildSeriesTask, htmlBuildTask, browserSync.reload));
  gulp.watch('src/images/**/*.*').on('all', gulp.series(imageTask, browserSync.reload));
  browserSync.init({
    server: {
      baseDir: './dist'
    },
    open: false
  });
};

const serveTask = gulp.series(buildTask, watchFileChangesTask);

exports.clean = cleanTask;
exports.sass = sassBuildSeriesTask;
exports.js = jsBuildSeriesTask;
exports.html = htmlBuildTask;
exports['build'] = buildTask;
exports['build:prod'] = buildProdTask;
exports.deploy = deployTask;
exports.serve = serveTask;
exports.default = serveTask;
