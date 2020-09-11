let gulp = require('gulp');
let concat = require('gulp-concat');
let uglify = require('gulp-uglify');
let sass = require('gulp-sass');
let cssnano = require('gulp-cssnano');
let rename = require('gulp-rename');
let babel = require('gulp-babel');

//任务优化js
function fnjs(){
     gulp.src('./src/js/*.js')
        .pipe(babel({
            presets: ['@babel/env']
        }))
    .pipe(uglify())
    .pipe(rename({suffix : '.min'}))
    .pipe(gulp.dest('./dist/js'));
}
// function fnjs(){
//     gulp.src('./src/js/*.js')
//     .pipe(uglify())
//     .pipe(rename)
// }
//监听
function fnwatch(){
    gulp.watch('./src/js/*.js',fnjs);
}
//导出
exports.default = fnwatch;
exports.js = fnjs;
