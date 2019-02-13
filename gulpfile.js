var gulp = require('gulp'),
	watch = require('gulp-watch'),
	postcss = require('gulp-postcss'),
	autoprefixer = require('autoprefixer-core'),
	cssvars = require('postcss-simple-vars'),
	cssnested = require('postcss-nested'),
	cssImport = require('postcss-import');

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
	watch('./app/index.html', function() {
		//every time index.html is saved, gulp triggers gulp.start
		gulp.start('html');
	});

	watch('./app/assets/styles/**/*.css', function() {
		gulp.start('styles');
	});
});
