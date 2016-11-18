import gulp from 'gulp';
import plumber from 'gulp-plumber';
import notify from 'gulp-notify';
import sass from 'gulp-sass';
import uglifycss from 'gulp-uglifycss';
import autoprefixer from 'gulp-autoprefixer';
import cmq from 'gulp-combine-media-queries';
import templates from 'gulp-angular-templatecache'
import minifyHTML from 'gulp-minify-html'
import rename from 'gulp-rename';
import annotate from 'gulp-ng-annotate'
import filesort from 'gulp-angular-filesort'
import uglify from 'gulp-uglify'
import sourceMaps from 'gulp-sourcemaps';
import browserSync from 'browser-sync';
import concat from 'gulp-concat'


const paths = {
	dev: {
		html: './public/**/*.html',
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
		],
		js: './dist/app.js',
		vendors: './dist/vendors.js'
	},

	prod: {
		css: './dist/styles',
		material: './dist',
		js: './dist/scripts',
		vendors: './dist/scripts'
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

gulp.task("scripts", () => {
	gulp.src(paths.dev.js)
		.pipe(plumber())
		.pipe(filesort())
		.pipe(annotate())
		.pipe(uglify())
		.pipe(rename('app.min.js'))
		.pipe(gulp.dest(paths.prod.js))
});

gulp.task('templates', () => {
	gulp.src(paths.dev.html)
		.pipe(minifyHTML({
			quotes: true
		}))
		.pipe(templates('app.run.js', {
			standAlone: false,
			root: 'public/'
		}))
		.pipe(gulp.dest('./public/app'))
});

gulp.task("vendors", () => {
	gulp.src(paths.dev.vendors)
		//.pipe(plumber())
		//.pipe(filesort())
		//.pipe(annotate())
		.pipe(uglify())
		.pipe(rename('vendors.min.js'))
		.pipe(gulp.dest(paths.prod.vendors))
});

gulp.task('html', () => {
	gulp.src(paths.dev.html)
		.pipe(plumber())
		.pipe(browserSync.reload({stream: true}))
});

gulp.task('sass', ['browserSync'], () => {
	gulp.watch([paths.dev.sass, paths.dev.sass2], ['styles']);
});

gulp.task('build', ['browserSync'], () => {
	gulp.watch([paths.dev.js], ['scripts'])
	gulp.watch([paths.dev.sass, paths.dev.sass2], ['styles']);
});


