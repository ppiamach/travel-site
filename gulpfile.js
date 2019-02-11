var gulp = require('gulp'),
	watch = require('gulp-watch');

gulp.task('default', function() {
	console.log('You have created a task!');
});

gulp.task('html', function() {
	console.log('something useful done to html');
});

gulp.task('styles', function() {
	console.log('SASS or PostCSS running here.');
});

gulp.task('watch', function() {
	watch('./app/index.html', function() {
		//every time index.html is saved, gulp triggers gulp.start
		gulp.start('html');
	});

	watch('./app/assets/styles/**/*.css', function() {
		gulp.start('styles');
	});
});
