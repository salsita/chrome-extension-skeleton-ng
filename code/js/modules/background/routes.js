// routes for angular application
define(['util/messagingClient', 'angular', 'background/app', 'logging', 'configSerializer', 'staticConfig'],
  function(client, angular, app, logging, configSerializer, sc) {
  'use strict';
  var log = new logging(true, 'routes', client);

  return app.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when(sc.routes.welcome, {
      templateUrl: chrome.extension.getURL('/html/templates/welcome.html'),
      controller: 'WelcomeControler'
    });

    $routeProvider.when(sc.routes.options, {
      templateUrl: chrome.extension.getURL('/html/templates/options.html'),
      controller: 'OptionsControler'
    });

    $routeProvider.when(sc.routes.popup, {
      templateUrl: chrome.extension.getURL('/html/templates/popup.html'),
      controller: 'PopupControler'
    });

    $routeProvider.otherwise({redirectTo: sc.routes.login});
  }])
  .run( function($rootScope, $location) {
    // register listener to watch route changes
    $rootScope.$on( '$routeChangeStart', function(event, next, current) {
      log.debug('Location path: ' + $location.path());
      // inject something to rootScope
      $rootScope.something = 'something';
    });
  });
});