var gulp = require('gulp'),
	watch = require('gulp-watch'),
	postcss = require('gulp-postcss'),
	autoprefixer = require('autoprefixer-core'),
	cssvars = require('postcss-simple-vars'),
	cssnested = require('postcss-nested'),
	cssImport = require('postcss-import'),
	browserSync = require('browser-sync').create();

gulp.task('default', function() {
	console.log('You have created a task!');
});

gulp.task('html', function() {
	console.log('something useful done to html');
});

gulp.task('styles', function() {
	return gulp
		.src('./app/assets/styles/styles.css')
		.pipe(postcss([cssImport, cssnested, cssvars, autoprefixer({ browsers: ['> 0%'] })]))
		.pipe(gulp.dest('./app/parsed/styles'));
});

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
		gulp.start('cssInject');
	});
});

gulp.task('cssInject', ['styles'], function() {
	return gulp.src('./app/parsed/styles/styles.css').pipe(browserSync.stream());
});
