const gulp = require('gulp');
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify');
const del = require('del');
const browserSync = require('browser-sync').create();
const sourcemaps = require('gulp-sourcemaps');
const sass = require('gulp-sass');
const tinypng = require('gulp-tinypng');

// const cssFiles =[
//     './src/css/**/main.css',
//     './src/css/**/media.css'
// ];

// const scssFiles =[
//     './src/sass/**/main.scss'
//     ,'./src/sass/**/media.scss'
// ];


const jsFiles =[
    // './src/js/slick.min.js',
    // './src/js/main.js'
    './src/js/*.js'
];

function styles() {
    // return gulp.src('./src/sass/**/*.+(sass|scss)')
    return gulp.src('./src/sass/**/main.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(concat('style.css'))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(cleanCSS({level: 2}))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./build/css'))
        .pipe(browserSync.stream());
}

function scripts() {
    return gulp.src(jsFiles)
        .pipe(concat('script.js'))
        // .pipe(uglify({toplevel: true}))
        .pipe(gulp.dest('./build/js'))
        .pipe(browserSync.stream());
}

// function clean() {
//     return del(['build/css/'])
// }

function tinyPNG() {
    return gulp.src('./src/img/*.*')
        .pipe(tinypng('Xbyf2PhMWBEf3WXxIAvaFbQ2wFxx1aPK'))
        .pipe(gulp.dest('./build/img'));
}
function tinyPNGWatch() {
    return gulp.src('./src/img/*.*')
        .pipe(gulp.dest('./build/img'));
}

function watch(){
    browserSync.init({
        server: {
            baseDir: "./"
        },
        browser: 'chrome'
        // ,notify: false
    });
    //gulp.watch('./src/css/**/*.css', styles);
    gulp.watch('./src/sass/**/*.scss', styles);
    gulp.watch('./src/js/**/*.js', scripts);
    gulp.watch('./src/img/**/*.*', tinyPNGWatch);
    gulp.watch("./*.html").on('change', browserSync.reload);
}

gulp.task('styles', styles);
gulp.task('scripts', scripts);
// gulp.task('del', clean);
gulp.task('tinyPNGWatch', tinyPNGWatch);            //just copy images!
gulp.task('watch', watch);
gulp.task('build', gulp.series(/*clean*/ gulp.parallel(styles, scripts, tinyPNGWatch)));

gulp.task('dev', gulp.series('build', 'watch'));
gulp.task('tinyPNG', tinyPNG);                      //single usage, tinify images!!!
