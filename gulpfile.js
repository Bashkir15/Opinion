var gulp = require('gulp');
var sass = require('gulp-sass');
var plumber = require('gulp-plumber');
var mincss = require('gulp-uglifycss');
var uglifyJs = require('gulp-uglify');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var annotate = require('gulp-ng-annotate');
var filesort = require('gulp-angular-filesort');

var config = {
	dev: {
		css: './public/static/stylesheets/css',
		mainCss: './public/static/stylesheets/css/main.css',
		mainSass: './public/static/stylesheets/sass/main.sass',
		sass1: './public/static/stylesheets/sass/**/*.sass',
		sass2: './public/static/stylesheets/sass/**/**/*.sass',
		sass3: './public/static/stylesheets/sass/**/**/**/*.sass',
		js: './public/app/**/*.js'
	},

	prod: {
		css: './dist',
		js: './dist/scripts'
	}
};

gulp.task('sass', function() {
	gulp.src(config.dev.mainSass)
		.pipe(plumber())
		.pipe(sass({styles: 'expanded'}))
		.pipe(gulp.dest(config.dev.css))
	}
);

gulp.task('mincss', function() {
	gulp.src(config.dev.mainCss)
		.pipe(plumber())
		.pipe(mincss())
		.pipe(gulp.dest(config.prod.css))
	}
);

gulp.task('scripts', function() {
	gulp.src(config.dev.js)
		.pipe(filesort())
		.pipe(annotate())
		.pipe(concat('app.js'))
		.pipe(uglifyJs())
		.pipe(rename('app.js.min'))
		.pipe(gulp.dest(config.prod.js))
	}
);

gulp.task('scripts:minify', function() {
	gulp.src(config.prod.js + '/*.js')
		.pipe(uglifyJs())
		.pipe(rename(function (path) {
			path.extname = 'min.js'
		}))
		.pipe(gulp.dest(config.prod.js))
	}
);

gulp.task('watch', function() {
	gulp.watch([config.dev.mainSass, config.dev.sass1, config.dev.sass2, config.dev.sass3], ['sass']);
	}
);

gulp.task('outScript', function() {
	gulp.start('scripts');
});

gulp.task('build', function() {
	gulp.start('mincss');
});