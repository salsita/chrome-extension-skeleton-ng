//
// main background script for angular application
// this files includes background pages: popup page, options page, welcome page
//
requirejs.config(requireConfig);

requirejs([ 'jquery',
            'angular',
            'util/messagingClient',
            'logging',
            'background/app',
            'background/routes',
            'underscore'
            ],
function( $,
          angular,
          client,
          logging,
          app,
          routes,
          _
          ) {

  var log = new logging(true, 'backgroundAngular', client);
  'use strict';

  $(document).ready(function () {
    var $html = $('html');
    // Because of RequireJS we need to bootstrap the app app manually
    // and Angular Scenario runner won't be able to communicate with our app
    // unless we explicitely mark the container as app holder
    // More info: https://groups.google.com/forum/#!msg/angular/yslVnZh9Yjk/MLi3VGXZLeMJ
    $html.addClass('ng-app');

    // due to chrome extension can work only in CSP (Content Security Policy)
     // more details http://docs.angularjs.org/api/ng.directive:ngCsp
    $html.addClass('ng-csp');

    angular.bootstrap($html, [app['name']]);
    log.debug('Angular BG application is loaded');
  });
});
