var gulp = require('gulp'),//подключаю плагин gulp
	less = require('gulp-less'), //подключаю плагин gulp-less для компиляции less
	watch = require('gulp-watch'),//подключаю плагин gulp-watch
	gifsicle = require('imagemin-gifsicle'),//подключаю плагин gulp-imagemin
	imagemin = require('gulp-imagemin'),//подключаю все плагины imagemin
	mozjpeg = require('imagemin-mozjpeg'),
	optipng = require('imagemin-optipng'),
	svgo = require('imagemin-svgo');
	var useref = require('gulp-useref');//Подключаю плагины для сжатия js, css и для их оптимизации
	var uglify = require('gulp-uglify');
	var cssnano = require('gulp-cssnano');
	var gulpIf = require('gulp-if'); 
	
gulp.task('less', function(){//создаю задачу, которая вызывается при помощи команды gulp less и содержит функцию
	return gulp.src('app/less/*.less')//получаем источник с помощью gulp.src
	.pipe(less({}))//Прогоняем полученный файл через gulp-less, получая на выходе css. Прим.: .pipe позволяет выполнять плагины
	.pipe(gulp.dest('app/css')) //выходные файлы помещаются в папку, указанную в gulp.dest
});


gulp.task('watch', function(){//задача, вызываемая командой gulp watch
	gulp.watch('app/less/*.less', gulp.series(['tellless']))//метод watch следит за изменениями файлов, которые указаны в качестве первого аргумента и, если находит изменения, вызывает задачу, указанную во втором аргументе
});
gulp.task('tellless', function(){//задача вызывается методом watch и выводит на консоль информацию о том, что Less был изменен

			plugins: [
			{removeViewBox: true},
			{cleanupIDs: false}
			]  
		}) 
	]))
	.pipe(gulp.dest('dist/images'))//результат помещается в папку dist/images
});


gulp.task('useref', function(){
	return gulp.src('app/*.html')//находит hrml документ
	.pipe(useref())//ищет комментарии в html-документе, которые сообщают о том, что надо сжать
	.pipe(gulpIf('*.js', uglify()))//сжимает js файл
	.pipe(gulpIf('*.css', cssnano()))//сжимает css файл
	.pipe(gulp.dest('dist'))//результат помещается в папку dist
});

gulp.task('default', //вызывается при вводе gulp
	gulp.series('less', 'images', 'useref')); //запускает указанные задачи по очереди
