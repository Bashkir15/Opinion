import gulp from 'gulp'
import sourcemaps from 'gulp-sourcemaps'
import rename from 'gulp-rename'

import annotate from 'gulp-ng-annotate'
import uglify from 'gulp-uglify'
import filesort from 'gulp-angular-filesort'

import config from '../config'

export function processScripts(done) {
	gulp.src(config.dev.scripts)
		.pipe(sourcemaps.init())
		//.pipe(filesort())
		//.pipe(annotate())
		.pipe(uglify())
		.pipe(rename((path) => {
			path.extname = '.min.js'
		}))
		.pipe(gulp.dest(config.prod.scripts))
		done();
}