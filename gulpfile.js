var gulp = require('gulp'),//подключаю плагин gulp
	less = require('gulp-less'), //подключаю плагин gulp-less для компиляции less
	watch = require('gulp-watch');//подключаю плагин gulp-watch
	
gulp.task('less', function(){//создаю задачу, которая вызывается при помощи команды gulp less и содержит функцию
	return gulp.src('app/less/*.less')//получаем источник с помощью gulp.src
	.pipe(less({}))//Прогоняем полученный файл через gulp-less, получая на выходе css. Прим.: .pipe позволяет выполнять плагины
	.pipe(gulp.dest('app/css')) //выходные файлы помещаются в папку, указанную в gulp.dest
});


gulp.task('watch', function(){//задача, вызываемая командой gulp watch
	gulp.watch('app/less/*.less', gulp.series(['tellless']))//метод watch следит за изменениями файлов, которые указаны в качестве первого аргумента и, если находит изменения, вызывает задачу, указанную во втором аргументе
});
gulp.task('tellless', function(){//задача вызывается методом watch и выводит на консоль информацию о том, что Less был изменен
	console.log('Less has been changed')
	return gulp.src('*.less')
});
