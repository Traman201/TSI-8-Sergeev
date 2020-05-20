var gulp = require('gulp'),//подключаю модуль gulp
	less = require('gulp-less'); //подключаю модуль gulp-less для компиляции less
	
gulp.task('less', function(){//создаю задачу, которая вызывается при помощи команды gulp less и содержит функцию
	return gulp.src('app/less/*.less')//получаем источник с помощью gulp.src
	.pipe(less({}))//Прогоняем полученный файл через gulp-less, получая на выходе css. Прим.: .pipe позволяет выполнять плагины
	.pipe(gulp.dest('app/css')) //выходные файлы помещаются в папку, указанную в gulp.dest
});