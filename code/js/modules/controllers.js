define(['angular', 'util/messagingClient', 'logging', 'staticConfig'],
  function (angular, client, logging, sc) {
  'use strict';
  logging.init(true, "controls", client);

  return angular.module('passApp.controllers', [])

    // welcome controller
    .controller('WelcomeControler', ['$scope', '$location',
      function($scope, $location) {
        require(['controllers/welcomectrl'], function(welcomectrl) {
        angular.injector(['ng']).invoke(welcomectrl, this,
          {'$scope': $scope, '$location': $location});
      });
    }])
    // options controller
    .controller('OptionsControler', ['$scope', '$location',
      function($scope, $location) {
        require(['controllers/optionsctrl'], function(optionsctrl) {
        angular.injector(['ng']).invoke(optionsctrl, this,
          {'$scope': $scope, '$location': $location});
      });
    }])
    // popup controller
    .controller('PopupControler', ['$scope', '$location',
      function($scope, $location) {
        require(['controllers/popupctrl'], function(popupctrl) {
        angular.injector(['ng']).invoke(popupctrl, this,
          {'$scope': $scope, '$location': $location});
      });
    }]);

});