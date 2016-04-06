'use strict';

var gulp = require('gulp');
//var webpack = require('webpack-stream');
var connect = require('gulp-connect'); // runs local server
var open = require('gulp-open'); // open url in web browser
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var concat = require('gulp-concat');
var lint = require('gulp-eslint');

var config = {
    port: 9000,
    devBaseUrl: 'http://localhost',
    paths: {
        html: './src/*.html',
        js: './src/**/*.jsx',
        dist: './dist',
        images: './src/images/*',
        modulesCss: [
            './node_modules/bootstrap/dist/css/bootstrap.min.css',
            './node_modules/bootstrap/dist/css/bootstrap-theme.min.css',
            './node_modules/toastr/build/toastr.min.css',
            './node_modules/bootstrap-material-design/dist/css/material.min.css',
            './node_modules/bootstrap-material-design/dist/css/ripples.min.css',
            './node_modules/react-datepicker/dist/react-datepicker.css'
        ],
        modulesJs:[
          './node_modules/bootstrap-material-design/dist/js/*.min.js',
          './node_modules/bootstrap/dist/js/*.min.js'
        ],
        appCss:[
             './src/**/css/**.css'
        ],
        mainJs: './src/main.jsx',
        mainIndex: 'dist/index.html'
    }
};

// start local development server
gulp.task('connect', function () {
    connect.server({
        root: ['dist'],
        port: config.port,
        base: config.devBaseUrl,
        livereload: true
    });
})

gulp.task('open', ['connect'], function () {
    gulp.src(config.paths.mainIndex)
        .pipe(open({ uri: config.devBaseUrl + ':' + config.port + '/' }))
});

/** tasks to bundle source in the dist folder*/
gulp.task('html', function () {
    gulp.src(config.paths.html)
        .pipe(gulp.dest(config.paths.dist))
        .pipe(connect.reload());
});

gulp.task('js', function () {
    
    gulp.src(config.paths.modulesJs)
        .pipe(concat('modulesbundle.js'))
        .pipe(gulp.dest(config.paths.dist + '/scripts'));
 
    browserify( {entries: config.paths.mainJs, extensions: ['.jsx'], debug: true})
        .transform(babelify, {presets: ['es2015', 'react']})
        .bundle()
        .on('error', console.error.bind(console))
        .pipe(source('bundle.js'))
        .pipe(gulp.dest(config.paths.dist + '/scripts'))
        .pipe(connect.reload());
});

gulp.task('css', function () {
    
    console.log("Entering css task");
    
    gulp.src(config.paths.modulesCss)
        .pipe(concat('modules.css'))
        .pipe(gulp.dest(config.paths.dist + '/css'));
        
         gulp.src(config.paths.appCss)
        .pipe(concat('app.css'))
        .pipe(gulp.dest(config.paths.dist + '/css'))
        .pipe(connect.reload());
});

gulp.task('images', function () {
    gulp.src(config.paths.images)
        .pipe(gulp.dest(config.paths.dist + '/images'))
       
    gulp.src('./src/favicon.ico')
        .pipe(gulp.dest(config.paths.dist))
});


gulp.task('lint', function(){
    return gulp.src(config.paths.js)
        .pipe(lint({config: 'eslint.config.json'}))
        .pipe(lint.format());
});

gulp.task('watch', function(){
    gulp.watch(config.paths.html, ['html']);
    gulp.watch(config.paths.js, ['js', 'lint']);
     gulp.watch(config.paths.modulesCss, ['css']);
   gulp.watch(config.paths.appCss, ['css']);
})

gulp.task('default', ['html', 'js', 'css', 'images', 'lint', 'open', 'watch']);

/*
gulp.task('default', ['html', 'js', 'css', 'images', 'lint', 'open', 'watch'], function()
{
    return gulp.src('src/entry.js')
    .pipe(webpack())
    .pipe(gulp.dest('dist/'));
});
*/