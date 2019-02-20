var gulp = require('gulp'),
	postcss = require('gulp-postcss'),
	autoprefixer = require('autoprefixer-core'),
	cssvars = require('postcss-simple-vars'),
	cssnested = require('postcss-nested'),
	cssImport = require('postcss-import'),
	mixins = require('postcss-mixins');

gulp.task('styles', function() {
	return gulp
		.src('./app/assets/styles/styles.css')
		.pipe(postcss([cssImport, mixins, cssnested, cssvars, autoprefixer({ browsers: ['> 0%'] })]))
		.on('error', function(errorInfo) {
			console.log(errorInfo.toString());
			this.emit('end');
		})
		.pipe(gulp.dest('./app/parsed/styles'));
});
