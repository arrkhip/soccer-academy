'use strict';

const gulp 									 = require('gulp'),
			gp 	 									 = require('gulp-load-plugins')(),
			del 									 = require('del'),
			imageminJpegRecompress = require('imagemin-jpeg-recompress'),
			imageminPngquant			 = require('imagemin-pngquant'),
			browserSync 					 = require('browser-sync').create();


// Локальный сервер из папки 'build'
gulp.task('serve', function() {
  browserSync.init({
    server: {
      baseDir: "./build"
    }
  });
});


// Работа с pug файлами, требует доработки - подключения плагина emitty
gulp.task('pug', function() {
	return gulp.src('src/pug/pages/*.pug')
		.pipe(gp.plumber())
		.pipe(gp.pug({
			pretty: true
		}))
		.pipe(gulp.dest('build'))
		.on('end', browserSync.reload);
});


// Оптимизация файлов стилей
gulp.task('less', function() {
	return gulp.src('src/less/style.less')
		.pipe(gp.sourcemaps.init())
		.pipe(gp.plumber())
		.pipe(gp.less())
		.pipe(gp.autoprefixer({
      browsers: ['last 10 versions']
     }))
		.on('error', gp.notify.onError({
        title: 'Error in styles'
     }))
		.pipe(gp.csso())
		.pipe(gp.rename('style.min.css'))
		.pipe(gp.sourcemaps.write())
		.pipe(gulp.dest('build/css'))
		.pipe(browserSync.reload({ // обновление без прокрутки странцы
			stream: true
		})); 
});


gulp.task('scripts', function() {
	return gulp.src(['src/js/**/*.js', 'src/blocks/**/*.js'])
		.pipe(gp.sourcemaps.init())
		.pipe(gp.concat('main.js'))
		.pipe(gp.sourcemaps.write())
		.pipe(gulp.dest('build/js'))
		.on('end', browserSync.reload);
});

gulp.task('scripts:libs', function() {
	return gulp.src('src/libs/**/*.js')
		.pipe(gp.sourcemaps.init())
		.pipe(gp.concat('libs.js'))
		.pipe(gp.sourcemaps.write())
		.pipe(gulp.dest('build/js'))
		.on('end', browserSync.reload);
});


// Оптимизация графики
gulp.task('img', function () {
  return gulp.src(['src/img/**/*', 'src/blocks/**/*.+(png|jpg|gif|jpeg)']) 
    .pipe(gp.newer('build/img/'))
    .pipe(gp.rename({dirname: ''}))
    .pipe(gulp.dest('build/img/')) 
    .pipe(gp.imagemin([
      gp.imagemin.gifsicle({interlaced: true}),
      imageminJpegRecompress({
        progressive: true,
        max: 80,
        min: 70
      }),
      imageminPngquant({quality: '80'}),
    ]))
    .pipe(gulp.dest('build/img/')); 
});


// Слежение за изменениями
gulp.task('watch', function() {
	gulp.watch('src/**/*.pug', gulp.series('pug'));
	gulp.watch('src/**/*.less', gulp.series('less'));
	gulp.watch(['src/js/**/*.js', 'src/blocks/**/*.js'], gulp.series('scripts'));
	gulp.watch(['src/libs/**/*.js', 'src/blocks/**/*.js'], gulp.series('scripts:libs'));
	gulp.watch(['src/img/**/*', 'src/blocks/**/*.+(png|jpg|gif|jpeg)'], gulp.series('img'));
});


// Очистка папки build
gulp.task('clean', function() {
	return del(['build/*', '!build/img']);
});


// Копирование файлов в build
gulp.task('copy', function() {
	return gulp.src(
		'src/fonts/**/*', 
		{
			base: './src'
		})
		.pipe(gulp.dest('build'));
});


// Запуск сборки
gulp.task('default', gulp.series('clean',
	gulp.parallel('copy', 'pug', 'less', 'scripts', 'scripts:libs', 'img'),
	gulp.parallel('watch', 'serve')
));