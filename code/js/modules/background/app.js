//
// Background script angular application
//

define([
  'angular',
  'background/filters',
  'background/controllers'
  ], function (angular, filters, controllers) {
    'use strict';

    return angular.module('bgApp', ['bgApp.controllers', 'bgApp.filters']);
});
