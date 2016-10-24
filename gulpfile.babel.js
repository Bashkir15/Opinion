import gulp from 'gulp';
import plumber from 'gulp-plumber';
import notify from 'gulp-notify';
import sass from 'gulp-sass';
import uglifycss from 'gulp-uglifycss';
import autoprefixer from 'gulp-autoprefixer';
import cmq from 'gulp-combine-media-queries';
import rename from 'gulp-rename';
import sourceMaps from 'gulp-sourcemaps';
import browserSync from 'browser-sync';
import concat from 'gulp-concat'


const paths = {
	dev: {
		html: './public/*.html',
		sass: './public/static/sass/main.sass',
		sass2: './public/static/sass/**/*.*',
		materialModules: [
			'angular-material/modules/js/core',
			'angular-material/modules/js/checkbox',
			'angular-material/modules/js/button',
			'angular-material/modules/js/chips',
			'angular-material/modules/js/dialog',
			'angular-material/modules/js/sidenav',
			'angular-material/modules/js/tabs',
			'angular-material/modules/js/toast',
			'angular-material/modules/js/tooltip'
		]
	},

	prod: {
		css: './dist/styles',
		material: './dist'
	}
};

const interceptErrors = (error) => {
	let args = Array.prototype.slice.call(arguments);

	notify.onError({
		title: 'Compile Error',
		message: '<%= error.message %>'
	}).apply(this, args);

	this.emit('end');
};

gulp.task('browserSync', () => {
	browserSync.init(null, {
		proxy: 'http://localhost:8000',
		files: ['public/**/*.*'],
		port: 7000
	});
});


gulp.task('styles', () => {
	gulp.src(paths.dev.sass)
		.pipe(plumber({
			errorhandler: function(err) {
				notify("Error: <%= err" );
				console.log(err);
				this.emit('end');
			}
		}))
		.pipe(sourceMaps.init())
		.pipe(sass({
			errLogToConsole: true,
			outputStyle: 'compact',
			precision: 10
		}))
		.pipe(autoprefixer({
			browsers: ['last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'],
			cascade: true
		}))
		.pipe(uglifycss({
			maxLineLne: 80
		}))
		.pipe(sourceMaps.write())
		.pipe(rename((path) => {
			path.extname = '.min.css'
		}))
		.pipe(gulp.dest(paths.prod.css))
		.pipe(notify('Styles task completed'))
		.pipe(browserSync.reload({stream: true}))		
});

gulp.task('html', () => {
	gulp.src(paths.dev.html)
		.pipe(plumber())
		.pipe(browserSync.reload({stream: true}))
});

gulp.task('sass', ['browserSync'], () => {
	gulp.watch([paths.dev.sass, paths.dev.sass2], ['styles']);
});


