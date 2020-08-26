const gulp = require('gulp');
const sass = require('gulp-sass');
sass.compiler = require('node-sass');
const browserSync = require('browser-sync').create();
const sourcemaps = require('gulp-sourcemaps');
const del = require('del');
const autoprefixer = require('gulp-autoprefixer');
const plumber = require('gulp-plumber');
const ts = require('gulp-typescript');
const tsProject = ts.createProject('tsconfig.json');
const fs = require('fs');
const imagemin = require('gulp-imagemin');
const inject = require('gulp-inject');
const webpack = require('webpack-stream');
const ghPages = require('gulp-gh-pages');

const cleanTask = () => del(['dist']);

const sassRenameTask = async (callback) => {
	await new Promise((res, rej) => fs.rename('dist/sass', 'dist/css', (err) => {
		if (err) {
			rej(err)
		}
		res();
	}));
	return callback();
};

const sassBuildTask = gulp.series(
	() => del(['dist/css']),
	() => gulp.src('src/**/*.scss')
		.pipe(plumber())
		.pipe(sourcemaps.init())
		.pipe(sass().on('error', sass.logError))
		.pipe(autoprefixer({ overrideBrowserslist: ['last 2 versions'], cascade: false}))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('dist'))
		.pipe(browserSync.stream()),
	sassRenameTask
);

const sassBuildProdTask = gulp.series(
	() => del(['dist/css']),
	() => gulp.src('src/**/*.scss')
		.pipe(plumber())
		.pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
		.pipe(autoprefixer({ overrideBrowserslist: ['last 2 versions'], cascade: false}))
		.pipe(gulp.dest('dist')),
	sassRenameTask
);

const jsBuildTask = gulp.series(
	() => del(['dist/js']),
	() => gulp.src('./src/**/*.ts')
		.pipe(plumber())
		.pipe(tsProject()).js
		.pipe(gulp.dest('dist')),
	() => gulp.src('./dist/**/*.js')
		.pipe(plumber())
		.pipe(webpack({
			output: { filename: 'main.js' },
			devtool: 'source-map',
			mode: 'development'
		}))
    .pipe(gulp.dest('dist/js')),
	() => del(['dist/ts'])
);
const jsBuildProdTask = gulp.series(
	() => del(['dist/js']),
	() => gulp.src('./src/**/*.ts')
		.pipe(plumber())
		.pipe(tsProject()).js
		.pipe(gulp.dest('dist')),
	() => gulp.src('./dist/**/*.js')
		.pipe(plumber())
		.pipe(webpack({
			output: { filename: 'main.js' },
			mode: 'production'
		}))
    .pipe(gulp.dest('dist/js')),
	() => del(['dist/ts'])
);

const imageTask = () => {
	return gulp.src('src/images/**/*.*')
		.pipe(imagemin())
		.pipe(gulp.dest('dist/images'))
	;
}

const htmlBuildTask = gulp.series(
	() => gulp.src('./src/**/*.html')
		.pipe(gulp.dest('./dist')),
	() => gulp.src('./dist/**/*.html')
		.pipe(inject(gulp.src(['./dist/**/*.js', './dist/**/*.css'], { read: false }), { relative: true }))
		.pipe(gulp.dest('./dist'))
);

const buildTask = gulp.series(cleanTask, sassBuildTask, jsBuildTask, htmlBuildTask, imageTask);
const buildProdTask = gulp.series(cleanTask, sassBuildProdTask, jsBuildProdTask, htmlBuildTask, imageTask);
const deployTask = () => gulp.src('./dist/**/*').pipe(ghPages());

const serveTask = gulp.series(buildTask, () => {
	browserSync.init({
		server: {
			baseDir: './dist'
		},
		open: false
	});
	gulp.watch('src/**/*.scss', sassBuildTask);
	gulp.watch('src/**/*.html').on('all', gulp.series( htmlBuildTask, browserSync.reload));
	gulp.watch('src/**/*.ts').on('all', gulp.series(jsBuildTask, htmlBuildTask, browserSync.reload));
	gulp.watch('src/images/**/*.*').on('all', gulp.series(imageTask, browserSync.reload));
});

exports.clean = cleanTask;
exports.sass = sassBuildTask;
exports.js = jsBuildTask;
exports.html = htmlBuildTask;
exports['build'] = buildTask;
exports['build:prod'] = buildProdTask;
exports.deploy = deployTask;
exports.serve = serveTask;
exports.default = serveTask;

