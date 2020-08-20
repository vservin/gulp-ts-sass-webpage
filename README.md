<h1 align="center">Frameworkless Gulp - TS - Sass Webpage</h1>

<p align="center">
    <img src="https://img.shields.io/badge/author-vservin-blueviolet.svg">
    <img src="https://img.shields.io/npm/v/vue2-baremetrics-calendar">
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

### Gulp

# Installation

```console
git clone https://github.com/vservin/gulp-ts-sass-webpage.git
npm i && npm run serve
```
