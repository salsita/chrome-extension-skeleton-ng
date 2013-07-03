var requireConfig = {
  // By default load any module IDs from js/modules
  baseUrl: '/js/modules',
  // Optionally specify different paths for specific modules
  paths: {
    lib: '/js/lib',
    angular: '/js/lib/angular/angular'
  },
  shim: {
    'angular' : {'exports' : 'angular'},
    'angularMocks': {deps:['angular'], 'exports':'angular.mock'}
  },
  priority: [
    "angular"
  ]
};
