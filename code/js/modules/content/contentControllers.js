define(['angular', 'util/messagingClient', 'logging', 'staticConfig'],
  function (angular, client, logging, sc) {
  'use strict';
  logging.init(true, "ContentControls", client);

  return angular.module('contentApp.controllers', [])

    // content controller
    .controller('ContentController', ['$scope', '$location',
      function($scope, $location) {
        require(['content/controllers/contentctrl'], function(contentctrl) {
        angular.injector(['ng']).invoke(contentctrl, this,
          {'$scope': $scope, '$location': $location});
      });
    }]);

});