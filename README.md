<h1 align="center">Frameworkless Gulp - TS - Sass Webpage</h1>

<p align="center">
    <img src="https://img.shields.io/badge/author-vservin-blueviolet.svg">
    <img src="https://img.shields.io/github/package-json/v/vservin/gulp-ts-sass-webpage">
    <img src="https://img.shields.io/github/package-json/dependency-version/vservin/gulp-ts-sass-webpage/dev/gulp/master">
    <img src="https://img.shields.io/github/package-json/dependency-version/vservin/gulp-ts-sass-webpage/dev/typescript/master">
    <img src="https://img.shields.io/github/package-json/dependency-version/vservin/gulp-ts-sass-webpage/dev/node-sass/master">
    <img src="https://img.shields.io/github/issues/vservin/gulp-ts-sass-webpage">
    <img src="https://img.shields.io/github/license/vservin/gulp-ts-sass-webpage">
</p>

_An example of a modern frameworkless way of developing scalable websites using TypeScript, npm packages and Sass styling._

---

If you are into front-end development, and you started reading about TypeScript vs JavaScript, minification, css preprocessor,
task runner and bundling, but you don't want to mess with a big framework, you came to the right place.

I've been using TypeScript (TS) for node development and angular development for quite some time, but I wondered how could
I make a frameworkless website with the benefits that TS and SASS offer? Here's an example for a quick and simple solution
for setting up your development environment and a production build script. 

Maintained by [Victor Servin](https://github.com/vservin)


##### Table of Contents
- [About](#about)
    - [Sass](#sass)
    - [TypeScript](#typescript)
    - [Gulp](#gulp)
- [Installation](#installation)
- [Goals](#goals)
- [Gulpfile](#gulpfile)
- [Live example](#live-example)

# About

In this section I'll write a little about what each package is for and its benefits to our purpose. 

### SASS

As you probably know, css is a style sheet language, used to describe the presentation of a document written commonly in HTML
but despite the discussion on whether css is a programming language or not, we generally use css for layout definition.

**What is and why to use a css preprocessor?**

When you get involved in developing a complete site and speaking only of the css stylesheets, you can get see that they get
larger and larger, more complex and harder to escalate. Here is where preprocessor come to the rescue.

From the definition: [*A CSS preprocessor is a program that lets you generate CSS from the preprocessor's own unique syntax.*](https://developer.mozilla.org/en-US/docs/Glossary/CSS_preprocessor)
So basically we generate CSS code from our preprocessor, but with reduced copy-and-paste source code and unique features
like variables, nesting, mixins, inheritance, and many others.\
The thing of a preprocessor that I want to highlight the most is the code optimization, we can save a lot of time reusing
mixins and variables from multiple sass files with fewer repetitions and with the trust of a compiler to raise up any syntax
issues.

There are several choices when working with preprocessors, there's SASS, LESS and Stylus and they all do the charm. If you
want to learn a preprocessor in no-time, probably LESS is your best choice, it is the more CSS-like of them all, SASS is more
alike to a programming language, and it supports all versions of CSS. Stylus is a sort of combination between the other two.\
We'll work with SASS because it is [the most popular of them all](https://2019.stateofcss.com/technologies/pre-post-processors/),
it has a lot of community and support from the contributors.

For more complete info visit **[SASS](https://sass-lang.com/)**

### TypeScript

Before getting into TS, let's talk a little about EcmaScript. In a few words, ES is the standard which provides the rules,
details, and guidelines for JS. There has been updates for ES and to this date, ES5 or ES 2009 is the one working with
most modern browsers however most people prefer using practices within ES6 or ES 2015 or most recent versions, because it changed
JS with major new features such as classes, arrow functions.
TypeScript is a superset of all ES standards and JavaScript, this means that has more functionalities and features included
into it, called type system. JS provides primitive language types like string, number, and object. It never cares if you
use a single variable for all your types and logic. Typescript does. This means that your existing working JavaScript code
is also TypeScript code. The main benefit of TypeScript is that it can highlight unexpected behavior in your code,
lowering the chance of bugs, making scaling much easier.\
It is important to highlight that **the browser does not understand TS**, **it needs to compile to JS**.

Let's make a quick example of some funny business JS lets you do.

```javascript
  console.log(new Array() == false) // outputs true
  console.log([] == false) // outputs true
  console.log('' == false) // outputs true
  var a = 2;
  a = 'hello';
  a = false;
  a = { color: 'red' };
  a = new Array();
```

vs the TS output.

```typescript
  console.log(new Array() == false) // error, does not compile, outputs: "the types have no overlap"
  console.log([] == false) // v: "the types have no overlap"
  console.log('' == false) // v: "the types have no overlap"
  var a = 2; // warning 'var' depecated, use instead of 'let' or 'const' 
  a = 'hello'; // error, outputs: "Type '"hello"' is not assignable to type 'number'."
  a = false; // error, outputs: "Type 'false' is not assignable to type 'number'."
  a = { color: 'red' }; // error, outputs: "Type '{ color: string; }' is not assignable to type 'number'."
  a = new Array(); // error, outputs: "Type 'any[]' is not assignable to type 'number'."
```

In summary:\
![TypeScript](https://www.filepicker.io/api/file/19uUx4kDS7ecP6YDadXg)

For more complete info visit **[TypeScript](https://www.typescriptlang.org/)**

### Gulp

So far I've explained why to use TS and SASS, so probably you are wondering what is and why do I need gulp?\
Since we are using some required steps before we actually can see our code functional, like compiling scss or sass files to
css and compiling ts files to js, probably our development process can be slowed down instead of going faster as the purpose
of this repo. Here is where a task runner comes to our aid.

In a short definition, a task runner lets us do several async tasks in parallel or in series automatically, this tasks can be
simple from renaming a directory to more complex ones like minifying code or compress images. We can separate and order tasks
to run a couple of them, or an entire build script.

The big ones are called [gruntjs](https://gruntjs.com/) and [gulpjs](https://gulpjs.com/). They both fo the trick, but I personally
went for gulp for its big amount of open-source plugins and the simplicity in using the output of a pipe into the input of another.

For more complete info visit **[Gulp](https://gulpjs.com/)**

## Installation

### Pre-requisites
For this tutorial it is important to have node and npm installed in your system. To this date I used the LTS version, that is:
- Node 12.x.x
- Npm 6.14.x

Check out the LTS version of node and npm [here](https://nodejs.org/en).

```console
git clone https://github.com/vservin/gulp-ts-sass-webpage.git
npm install && npm run serve
```

If your console/terminal/shell doesn't recognize properly the local installed gulp, probably you need to install it globally with:
```console
npm install --global gulp-cli
```

## Goals

For a complete reusable example of a website automated tasks I listed out a couple of goals with my gulpfile:
1. I should be able to compile my styles from scss format to css files.
2. My css should have prefixers, prefixers allow multi-browser and some old version compatibility.
3. I should be able to compile my scripts from ts format to js files.
4. I should be able to minify my image files.
5. I should be able to inject all my styles and script sources into my html pages.
6. I should have a development live-sync environment, whenever I save a file, my browser should detect changes automatically.
7. I should have a build script for production, minifying the styles and scripts and concatenating them into one single file.

## Gulpfile

##### Pre-build packages

Additional to my requirements I'm using:
- [Gulp-Plumber](https://www.npmjs.com/package/gulp-plumber). It prevents my pipes from breaking from possible errors and provides an error log.
- [Gulp-Sourcemaps](https://www.npmjs.com/package/gulp-sourcemaps). It helps me identify the exact scss line the styles come from in the browser devtools.
- [Del](https://www.npmjs.com/package/del). It is used to delete files and folders.
- [File System (node)](https://nodejs.org/api/fs.html). It is used for multiple files operations, I'll use it for renaming folders.
- [Webpack](https://www.npmjs.com/package/webpack-stream). It is a module bundler for JS applications, it is used for mapping javascript modules generating a single bundle output.

##### I should be able to compile my styles from scss format to css files.

For this part I'll use a basic gulp plugin called [gulp-sass](https://www.npmjs.com/package/gulp-sass), it will take the
scss source files and compiles them into css.
```javascript
const sassBuildTask = gulp.series(
  () => del(['dist/css']),
  () => gulp.src('src/**/*.scss')
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('dist'))
);
```

As you can see, each pipe takes the output of the previous pipe, the process `sassBuildTask` is making is:
1. Deletes the previous output.
2. Reads all the scss files in the `src` folder.
3. Adds the gulp-plumber error handler and pipes the same input it received.
4. Initializes the sourcemap read.
5. Compiles each of the scss files into a css file, and logs an error if it detects something during compilation.
6. Writes the sourcemap, so the browser knows where each style declaration comes from.
7. Finally, writes the output css files and their sourcemaps into the destination `dist` folder.

##### My css should have prefixers, prefixers allow multi-browser and some old version compatibility.

Here comes handy the plugin [gulp-autoprefixer](https://www.npmjs.com/package/gulp-autoprefixer). It takes a css files input
and adds the needed prefixes for browser compatibility.

```javascript
const sassBuildTask = gulp.series(
  () => del(['dist/css']),
  () => gulp.src('src/**/*.scss')
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({ overrideBrowserslist: ['last 2 versions'], cascade: false}))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('dist'))
);
```

##### I should be able to compile my scripts from ts format to js files.

Here I'm creating a `tsconfig.json` file where I want to place all the typescript compiler configuration and gulp should
recognize these configurations for its task. For the reference on all typescript configuration options visit the [compiler options](https://www.typescriptlang.org/docs/handbook/compiler-options.html).

```javascript
// ...
const ts = require('gulp-typescript');
const tsProject = ts.createProject('tsconfig.json');
// ...
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
```

In here I'm doing the most important part for my scripts to run in the browser, I'll explain each step of the way:
1. Deletes the previous output.
2. Takes all the TS source files.
3. Adds the gulp-plumber error handler and pipes the same input it received.
4. From the `tsconfig.json` rules I compile the TS into JS.
5. Writes the output JS files into the `dist` folder.
6. Takes the JS files and use webpack to create a single module bundle
7. Write the bundle into the `dist` folder.
8. Delete the files generated in step 5.

There's an important reason why we need to use the step 6 to 8: there is some ES6 syntax, specifically modules import and export
that is not compatible with browsers, but typescript by itself can only compile successfully into browsers using umd or amd modules
because browsers doesn't recognize module node syntax like `export`, `import` or `require`, but it starts breaking once we try to execute
global scoped javascript code. So here is where a module bundler comes to the rescue, it removes all the multi-file import and exporting
and merges everything into a single bundled javascript file, prepared to run in our application.

##### I should be able to minify my image files.

The package [gulp-imagemin](https://www.npmjs.com/package/gulp-imagemin) helps us to minify media images like png, jpeg, gif and svg.

```javascript
const imageTask = () => {
  return gulp.src('src/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/images'))
  ;
}
```

##### I should be able to inject all my styles and script sources into my html pages.

After I compile the files, the browser need to import them into the html files, having a structure similar to:

```html
<!DOCTYPE html>
<html>
<head>
  <title>My index</title>
  <link rel="stylesheet" href="/src/style1.css">
  <link rel="stylesheet" href="/src/style2.css">
</head>
<body>
  <!-- ... -->
  <!-- My Page Elements -->
  <!-- ... -->
  <script src="/src/lib1.js"></script> 
  <script src="/src/lib2.js"></script>
</body>
</html>
```

For that purpose is the package [gulp-inject](https://www.npmjs.com/package/gulp-inject), We can declare a commented html block
indicating where I want my styles and scripts to be injected inside an HTML, the only thing we need to do is have the blocks
`<!-- inject:css -->`, `<!-- inject:js -->` and `<!-- endinject -->` inside our html. Something like:

```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="icon" type="image/png" sizes="32x32" href="images/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="images/favicon-16x16.png">
    <title>My first gulp project</title>
    <!-- inject:css -->
    <!-- endinject -->
  </head>
  <body>
    <h1>Hello World!</h1>
    <!-- inject:js -->
    <!-- endinject -->
   </body>
</html>
```

Our gulp task:

```javascript
const htmlBuildTask = gulp.series(
  () => gulp.src('./src/**/*.html')
    .pipe(gulp.dest('./dist')),
  () => gulp.src('./dist/**/*.html')
    .pipe(inject(gulp.src(['./dist/**/*.js', './dist/**/*.css'], { read: false }), { relative: true }))
    .pipe(gulp.dest('./dist'))
);
```

##### I should have a development live-sync environment, whenever I save a file, my browser should detect changes automatically.

Here comes one of my favourite tools, [Browser Sync](https://www.browsersync.io/) ([browser-sync](https://www.npmjs.com/package/browser-sync))
used for keeping browsers and devices in sync while building websites, we can have our browser in our PC and mobile with the local served
project with browser-sync and make a change in our styling, streaming the changed file automatically, no manual reload needed.

```javascript
// ...
const browserSync = require('browser-sync').create();
// ...
const sassBuildTask = gulp.series(
  () => del(['dist/css']),
  () => gulp.src('src/**/*.scss')
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({ overrideBrowserslist: ['last 2 versions'], cascade: false}))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('dist'))
    .pipe(browserSync.stream())
);
// ...
const serveTask = gulp.series(buildTask, () => {
  browserSync.init({
    server: {
      baseDir: './dist'
    },
    open: false
  });
  gulp.watch('src/**/*.scss', sassBuildTask);
  gulp.watch('src/**/*.html', htmlBuildTask).on('change', browserSync.reload);
  gulp.watch('src/**/*.ts', jsBuildTask, htmlBuildTask).on('change', browserSync.reload);
  gulp.watch('src/images/**/*.*', imageTask).on('change', browserSync.reload);
});
```

In this task we are serving in our local network a forwarded port for the test of our website. In addition, we are watching for
file changes, reacting to them as we need. If we change our styles these are automatically injected with no reload needed,
in the case of the scripts, html and images, we do need to reload our browser, so we can build our new code and afterwards, reload our browser.

##### I should have a build script for production, minifying the styles and scripts and concatenating them into one single file.

In here we are mostly done, but we can add a couple of parameters for minification and removing sourcemaps.

```javascript
const sassBuildProdTask = gulp.series(
  () => del(['dist/css']),
  () => gulp.src('src/**/*.scss')
    .pipe(plumber())
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(autoprefixer({ overrideBrowserslist: ['last 2 versions'], cascade: false}))
    .pipe(gulp.dest('dist'))
);
```

```javascript
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
```

Afterwards we can create a build task that runs all the needed tasks for creating our project from scratch ready for production.

```javascript
const buildTask = gulp.series(cleanTask, sassBuildTask, jsBuildTask, htmlBuildTask, imageTask);
const buildProdTask = gulp.series(cleanTask, sassBuildProdTask, jsBuildProdTask, htmlBuildTask, imageTask);

exports['build'] = buildTask;
exports['build:prod'] = buildProdTask;
exports.serve = serveTask;
exports.default = serveTask;
``` 

## Live example

Finally, we are good to go! I'm attaching a source code, and the generated output code with npm libraries examples
generating a fully functional [**Frameworkless Gulp - TS - Sass Website**](https://vservin.github.io/gulp-ts-sass-webpage/)!
