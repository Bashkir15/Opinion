var gulp = require('gulp');
var sass = require('gulp-sass');
var plumber = require('gulp-plumber');

var config = {
	dev: {
		css: './public/static/stylesheets/css/main.css',
		mainSass: './public/static/stylesheets/sass/main.sass',
		sass1: './public/static/stylesheets/sass/**/*.sass',
		sass2: './public/static/stylesheets/sass/**/**/*.sass',
		sass3: './public/static/stylesheets/sass/**/**/**/*.sass'
	}
};

gulp.task('sass', function() {
	gulp.src(config.dev.mainSass)
	.pipe(plumber())
	.pipe(sass({styles: 'expanded'}))
	.pipe(gulp.dest(config.dev.css))
	}
);

gulp.task('watch', function() {
	gulp.watch([config.dev.mainSass, config.dev.sass1, config.dev.sass2, config.dev.sass3], ['sass']);
	}
);