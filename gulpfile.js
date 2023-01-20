import gulp from 'gulp';
import sass from 'sass';
import gulpSass from 'gulp-sass';
import concat from 'gulp-concat';
import babel from 'gulp-babel-minify';


const scssComplier = gulpSass(sass);
const JS_ROUTE = './js';
const SCSS_ROUTE = './scss';
const BUILD = './build';
const JS_FILES = JS_ROUTE + '/**/*.js';
const SCSS_FILES = SCSS_ROUTE + '**/*.scss';

async function defaultJs(){
	gulp.src(JS_FILES)
	.pipe(babel())
	.pipe(concat('finish.js'))
	.pipe(gulp.dest(BUILD));
}

async function defaultScss(){
gulp.src(SCSS_FILES)
.pipe(scssComplier())
.pipe(concat('finishScss.css'))
.pipe(gulp.dest(BUILD));
}

gulp.task('default', gulp.parallel(defaultJs,defaultScss));

gulp.task('watch-css', function(){
	gulp.watch(SCSS_FILES, defaultScss);

})
gulp.task('watch-js', function(){
	gulp.watch(JS_FILES, defaultJs);

})

gulp.task('watch',gulp.parallel('watch-css','watch-js'));