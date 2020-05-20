var gulp = require('gulp'),//подключаю модуль gulp
	less = require('gulp-less'); //подключаю модуль gulp-less для компиляции less
	
gulp.task('less', function(){//создаю задачу, которая вызывается при помощи команды gulp less и содержит функцию
	console.log('hello')
	return gulp.src('app/less/*.less')
	.pipe(less({}))
	.pipe(gulp.dest('app/css')) 
});