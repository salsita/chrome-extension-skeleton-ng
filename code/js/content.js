  requirejs.config(requireConfig);

requirejs([ 'jquery',
            'config',
            'util/messaging',
            'util/messagingClient',
            'lib/purl',
            'logging',
            'angular',
            'content/contentApp'],
function(   $,
            config,
            messaging,
            client,
            purl,
            logging,
            angular,
            contentApp) {

  // uncomment the following line if content should be handling some requests
  // sent from background (when appropriate handler is implemented in
  // contentHandlers.js

  messaging.contentInitialize();
  logging.init(true, "content", client);
  logging.debug("content started");

  'use strict';
  client.sendBroadcast({
    cmd: 'LoadHtml',
    args: {
      template: 'content',
      data: {}
    }
  }, function(response) {
    $(function() {
      // inject html to content page (begin of the body)
      $(response)
      .prependTo('body');

      var contentDiv = $('#contentDiv');

      /*
      var contentApp = angular.module("contentApp", []);
      contentApp.controller("contentController", function($scope, $http){
        $scope.content_script = "Content Script";
      });
      */

      angular.bootstrap(contentDiv, [contentApp['name']]);
      // Because of RequireJS we need to bootstrap the app app manually
      // and Angular Scenario runner won't be able to communicate with our app
      // unless we explicitely mark the container as app holder
      // More info: https://groups.google.com/forum/#!msg/angular/yslVnZh9Yjk/MLi3VGXZLeMJ
      contentDiv.addClass('ng-app');

      // due to chrome extension can work only in CSP (Content Security Policy)
      // more details http://docs.angularjs.org/api/ng.directive:ngCsp
      contentDiv.addClass('ng-csp');
    });
  });


});
