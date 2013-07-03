require.config({
	paths: {
		angular: 'lib/angular/angular',
		angularMocks: '/base/tests/lib/angular/angular-mocks',
		text: 'lib/require/text',
		fixtures: '/base/tests/unit/fixtures'

	},
	baseUrl: '/base/app/js',
	shim: {
		'angular' : {'exports' : 'angular'},
		'angularMocks': {deps:['angular'], 'exports':'angular.mock'}
	},
	priority: [
		"angular"
	]
});

require( [
	'angular',
	'app',
	'routes',
	'angularMocks',
	'/base/tests/unit.js' //list all your unit files here

], function(angular, app, routes) {
		window.__karma__.start();
});
