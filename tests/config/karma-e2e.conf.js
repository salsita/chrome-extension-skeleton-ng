basePath = '../../';

frameworks = ['jasmine'];

files = [
  'tests/lib/angular/angular-scenario.js',
  ANGULAR_SCENARIO_ADAPTER,
  'tests/e2e/**/*.js'
];

autoWatch = false;

browsers = ['Chrome'];

singleRun = true;

proxies = {
  '/': 'http://localhost:8000/'
};

urlRoot = "__karma__";

junitReporter = {
  outputFile: 'test_out/e2e.xml',
  suite: 'e2e'
};

plugins = [
      'karma-jasmine',
      'karma-chrome-launcher'
    ];
