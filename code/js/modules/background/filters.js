//
// filters for angular-based background application
//

define(['angular'], function (angular) {
  'use strict';

  // filter for list object for iterate by properties
  angular.module('bgApp.filters', [])
  .filter('searchFilter', function() {
    return function(items, query) {
      var result = {};
      angular.forEach(items, function(value, key) {
        if (!query ||
            key.indexOf(query)!==-1) {
            result[key] = value;
        }
      });
      return result;
    };
  });
});

