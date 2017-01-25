import browserSync from 'browser-sync'

export const server = browserSync.create();

export function serve(done) {
	server.init({
		files: ['./public/**/*.'],
		port: 7000,
		proxy: 'http://localhost:800'
	}, done);
}