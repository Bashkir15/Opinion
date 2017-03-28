import gulp from 'gulp'
import chalk from 'chalk'
import config from '../config'

import { processStyles } from './styles'
import { processScripts } from './scripts' 
import { serve } from './serve'
import { watch } from './watch'

gulp.task('styles', processStyles);
gulp.task('scripts', processScripts);

gulp.task(watch);

const stylesTask = gulp.task('styles');
const scriptsTask = gulp.task('scripts');

gulp.task('default',
	gulp.series('styles', serve, watch)
);
