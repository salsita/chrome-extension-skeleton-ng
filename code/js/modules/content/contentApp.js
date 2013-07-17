define([
  'angular',
  'content/contentFilters',
  'content/contentControllers'
  ], function (angular, filters, controllers) {
    'use strict';

    return angular.module('contentApp', ['contentApp.controllers', 'contentApp.filters']);
});
