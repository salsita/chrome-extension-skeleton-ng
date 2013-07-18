define(['angular'],
  function (angular) {
  'use strict';


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