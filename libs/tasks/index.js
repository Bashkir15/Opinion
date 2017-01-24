import gulp from 'gulp'
import chalk from 'chalk'
import config from '../config'

import { processStyles} from './styles'
import { serve } from './serve'
import { watch } from './watch'

gulp.task('styles', processStyles);
gulp.task(watch);

const stylesTask = gulp.task('styles');
