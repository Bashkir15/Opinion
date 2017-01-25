import notify from 'gulp-notify'
import gutil from 'gulp-util'

export default function (...args) {
	gutil.beep();
	this.emit('end');

	notify.onError({
		title: 'Error',
		message: '<%= error.message %>'
	}).apply(this, args);
}