import gulp from 'gulp'
import path from 'path'
import chalk from 'chalk'
import config from '../config'

import { reload } from './serve'
import { processStyles } from './styles'

function onWatchError(error) {
	console.log(chalk.underline.red('Error happened', error));
}

function addEvents(watcher) {
	return watcher
		.on('error', onWatchError);
}

export function watch(done) {
	const watchers = [
		gulp.watch([config.dev.styles, config.dev.mainSass], processStyles)
	];

	watchers.map(watcher => addEvents(watcher));

	console.log(chalk.green('watching changes...'));
	done();
}