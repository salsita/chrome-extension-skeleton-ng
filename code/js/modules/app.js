define([
  'angular',
  'filters',
  'controllers'
  ], function (angular, filters, controllers) {
    'use strict';

    return angular.module('passApp', ['passApp.controllers', 'passApp.filters']);
});
