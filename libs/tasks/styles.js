import gulp from 'gulp'
import gutil from 'gulp-util'
import plumber from 'gulp-plumber'
import sourcemaps from 'gulp-sourcemaps'
import rename from 'gulp-rename'
import notify from 'gulp-notify'
import uglifycss from 'gulp-uglifycss'
import pure from 'gulp-purifycss'
import cmq from 'gulp-combine-media-queries'
import autoprefixer from 'gulp-autoprefixer'
import sass from 'gulp-sass'

import handleErrors from '../utils/handleErrors',
import config from '../config'
import { server } from './serve'

export function processStyles(done) {
	gulp.src(config.dev.mainSass)
		.pipe(plumber({
			errorHandler: handleErrors
		}))
		.pipe(sourcemaps.init())
		.pipe(sass({
			errLogToConsole: true,
			outputStyle: 'compact',
			precision: 10
		}))
		.pipe(autoprefixer({
			browsers: ['last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'],
			cascade: true
		}))
		.pipe(pure(['./public/**/*.ejs', './public/**/*.js']))
		.pipe(uglifycss({
			maxLineLne: 80
		}))
		.pipe(rename((path) => {
			path.extname = '.min.css'
		}))
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest(config.prod.styles))
		.pipe(notify('Styles task complete'))
		.pipe(server.stream({reload: true}));
		done();
}