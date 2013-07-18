define(['angular'],
  function (angular) {
  'use strict';

  return angular.module('bgApp.controllers', [])

    // welcome controller
    .controller('WelcomeControler', ['$scope', '$location',
      function($scope, $location) {
        require(['background/controllers/welcomectrl'], function(welcomectrl) {
        angular.injector(['ng']).invoke(welcomectrl, this,
          {'$scope': $scope, '$location': $location});
      });
    }])
    // options controller
    .controller('OptionsControler', ['$scope', '$location',
      function($scope, $location) {
        require(['background/controllers/optionsctrl'], function(optionsctrl) {
        angular.injector(['ng']).invoke(optionsctrl, this,
          {'$scope': $scope, '$location': $location});
      });
    }])
    // popup controller
    .controller('PopupControler', ['$scope', '$location',
      function($scope, $location) {
        require(['background/controllers/popupctrl'], function(popupctrl) {
        angular.injector(['ng']).invoke(popupctrl, this,
          {'$scope': $scope, '$location': $location});
      });
    }]);

});