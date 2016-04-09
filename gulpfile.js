var gulp = require('gulp');
var cleanCSS = require("gulp-clean-css"),
    autoprefixer = require('gulp-autoprefixer'),
    rename = require('gulp-rename'),
    imagemin = require('gulp-imagemin'),
    notify = require('gulp-notify'),
    del = require('del'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    sass = require('gulp-sass');



// 清理libCSS
gulp.task('clean:libcss', function() {
    del(['dist/css/lib/**']);
});

// 清理coreCSS
gulp.task('clean:corecss', function() {
    del(['dist/css/core/**']);
});

// sass
gulp.task('sass', function() {
    return gulp.src('src/sass/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('src/css/core'));
});

// 将css/lib的文件压缩
gulp.task('libcss', ['clean:libcss','sass'], function() {
    return gulp.src('src/css/lib/*.css')
        .pipe(cleanCSS({ compatibility: 'ie8' }))
        .pipe(gulp.dest('dist/css/lib'))
});

// 将css/core的文件添加CSS前缀，增加.min，并压缩
gulp.task('mincss', ['clean:corecss'], function() {
    return gulp.src('src/css/core/*.css')
        .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
        // .pipe(rename({ suffix: '.min' }))
        .pipe(cleanCSS({ compatibility: 'ie8' }))
        .pipe(gulp.dest('dist/css/core'))
});

// 对CSS总处理
gulp.task('css', ['libcss', 'mincss']);



// 清理JS
gulp.task('clean:js', function() {
    del(['dist/css/**/*']);
});

// 清理coreJS
gulp.task('clean:corejs', function() {
    del(['dist/js/core/**']);
});

// 清理libJS
gulp.task('clean:libjs', function() {
    del(['dist/js/lib/**']);
});

// JS hint、压缩、丑化
gulp.task('corejs', ['clean:corejs'], function() {
    return gulp.src('src/js/core/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
        .pipe(uglify())
        // .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('dist/js/core/'))
});

// 只是输出lib的JS，不做更改
gulp.task('libjs', ['clean:libjs'], function() {
    return gulp.src('src/js/lib/*.js')
        .pipe(gulp.dest('dist/js/lib/'));
})

// JS的总处理
gulp.task('js', ['libjs', 'corejs']);



// 清理图片
gulp.task('clean:img', function() {
    del(['dist/img/**']);
});

// 图片总操作
gulp.task('img', ['clean:img'], function() {
    return gulp.src('src/imgs/*.*')
        .pipe(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true }))
        .pipe(gulp.dest('dist/imgs'))
});

// 清理html
gulp.task('clean:html', function() {
    del(['dist/*.html']);
});

// 压缩html
gulp.task('html', ['clean:html'], function() {
    return gulp.src('src/*.html')
        .pipe(gulp.dest('dist/'));
});

// 清理字体
gulp.task('clean:font', function() {
    del(['dist/fonts/**']);
});

// 不处理字体
gulp.task('font', ['clean:font'], function() {
    return gulp.src('src/fonts/*')
        .pipe(gulp.dest('dist/fonts/'));
})

// 清理全部
gulp.task('clean:dist', function() {
    del(['dist/**/*']);
});

// 默认总方法
gulp.task('default', ['css', 'img', 'js', 'font', 'html']);

// 看守
// var watcher = gulp.watch('src/js/**/*.js', ['js']);
// watcher.on('change', function(event) {
//   console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
// });
