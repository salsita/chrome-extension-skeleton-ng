//
// content script based on angular application
//
// Some div /html/content.html injects to content page,
// and application will be bootstrapped in the injected div.
//

requirejs.config(requireConfig);

requirejs([ 'jquery',
            'util/messaging',
            'util/messagingClient',
            'logging',
            'angular',
            'content/contentApp'],
function(   $,
            messaging,
            client,
            logging,
            angular,
            contentApp) {

  // uncomment the following line if content should be handling some requests
  // sent from background (when appropriate handler is implemented in
  // contentHandlers.js

  messaging.contentInitialize();
  var log = new logging(true, 'content', client);
  log.debug('content started');

  'use strict';
  // load injected html template from extension's resources
  client.sendBroadcast({
    cmd: 'LoadHtml',
    args: {
      template: 'content',
      data: {}
    }
  }, function(response) {
    $(function() {
      // inject html to content page (first body div)
      $(response)
      .prependTo('body');

      // Find injected (from content.html) div
      var contentDiv = $('#contentDiv');

      // bootstrap angular application inside the injected div
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
