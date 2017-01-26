Package.describe({
	name: 'milligram:milligram-scss',
	version: '1.3.0',
	summary: 'A minimalist CSS framework on SCSS version.',
	git: 'https://github.com/milligram/milligram-scss.git',
	documentation: 'readme.md'
});

Package.onUse(function (api) {
	api.versionsFrom('METEOR@1.0');
	api.addFiles([
		'dist/milligram.scss'
	], 'client');
});
