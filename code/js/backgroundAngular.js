// main script for angular application
requirejs.config(requireConfig);

requirejs([ 'jquery',
            'angular',
            'util/messagingClient',
            'staticConfig',
            'logging',
            'background/app',
            'background/routes'
            ],
function( $,
          angular,
          client,
          sc,
          logging,
          app,
          routes
          ) {
  logging.init(true, "welcome", client);
  'use strict';

  $(document).ready(function () {
    var $html = $('html');
    angular.bootstrap($html, [app['name']]);
    // Because of RequireJS we need to bootstrap the app app manually
    // and Angular Scenario runner won't be able to communicate with our app
    // unless we explicitely mark the container as app holder
    // More info: https://groups.google.com/forum/#!msg/angular/yslVnZh9Yjk/MLi3VGXZLeMJ
    $html.addClass('ng-app');

    // due to chrome extension can work only in CSP (Content Security Policy)
     // more details http://docs.angularjs.org/api/ng.directive:ngCsp
    $html.addClass('ng-csp');
  });
});
