var gulp = require('gulp'),
	imageMin = require('gulp-imagemin'),
	del = require('del'),
	usemin = require('gulp-usemin'),
	rev = require('gulp-rev'),
	nano = require('gulp-cssnano'),
	uglify = require('gulp-uglify'),
	browserSync = require('browser-sync').create();

gulp.task('previewDist', function() {
	browserSync.init({
		notify : false,
		server : {
			baseDir : 'docs'
		}
	});
});

// delete the Dist folder every time before building the new one
gulp.task('deleteDistFolder', ['icons'], function() {
	return del('./docs');
});

gulp.task('copyGeneralFiles', ['deleteDistFolder'], function() {
	var pathsToCopy = [
		'./app/**/*',
		'!./app/index.html',
		'!./app/assets/images/**',
		'!./app/assets/scripts/**',
		'!./app/assets/styles/**',
		'!./app/parsed',
		'!./app/parsed/**'
	];
	return gulp.src(pathsToCopy).pipe(gulp.dest('./docs'));
});

// minimize the images and save them in Dist folder
gulp.task('optimizeImages', ['deleteDistFolder'], function() {
	return gulp
		.src(['./app/assets/images/**/*', '!./app/assets/images/icons', '!./app/assets/images/icons/**/*'])
		.pipe(
			imageMin({
				progressive : true,
				interlaced  : true,
				multipass   : true
			})
		)
		.pipe(gulp.dest('./docs/assets/images'));
});

gulp.task('useminTrigger', ['deleteDistFolder'], function() {
	gulp.start('usemin');
});

// minimizes css/js files
gulp.task('usemin', ['styles', 'scripts'], function() {
	return gulp
		.src('./app/index.html')
		.pipe(
			usemin({
				css : [
					function() {
						return rev();
					},
					function() {
						return nano();
					}
				],
				js  : [
					function() {
						return rev();
					},
					function() {
						return uglify();
					}
				]
			})
		)
		.pipe(gulp.dest('./docs'));
});

// main gulp task which triggers the sub-tasks
// (the two above)
gulp.task('build', ['deleteDistFolder', 'copyGeneralFiles', 'optimizeImages', 'useminTrigger']);
