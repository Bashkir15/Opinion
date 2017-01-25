const config = {
	dev: {
		views: './public/**/*.html',
		styles: './public/static/sass/**/*.sass',
		mainSass: './public/static/sass/main.sass',
		images: './public/static/images/**/*.+(png|jpg|gif|svg)'
	},

	prod: {
		styles: './dist/styles',
		scripts: './dist/scripts',
		images: './dist/images'
	}
};

export default config