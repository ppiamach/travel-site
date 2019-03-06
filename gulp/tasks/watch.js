var gulp = require('gulp'),
	watch = require('gulp-watch'),
	browserSync = require('browser-sync').create();

gulp.task('watch', function() {
	browserSync.init({
		notify : false,
		server : {
			baseDir : 'app'
		}
	});

	watch('./app/index.html', function() {
		//every time index.html is saved, gulp triggers reload()
		browserSync.reload();
	});

	watch('./app/assets/styles/**/*.css', function() {
		//every time any CSS file inside styles folder (recursively) is saved, gulp triggers cssInject task
		gulp.start('cssInject');
	});

	watch('./app/assets/scripts/**/*.js', function() {
		gulp.start('scriptsRefresh');
	});
});

gulp.task('cssInject', ['styles'], function() {
	return gulp.src('./app/parsed/styles/styles.css').pipe(browserSync.stream());
});

gulp.task('scriptsRefresh', ['scripts'] ,function(){
	browserSync.reload();
})