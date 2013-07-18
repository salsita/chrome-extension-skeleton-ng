//
// Content angular application
// For content and background pages different, independent angular application are used
//

define([
  'angular',
  'content/contentFilters',
  'content/contentControllers'
  ], function (angular, filters, controllers) {
    'use strict';

    return angular.module('contentApp', ['contentApp.controllers', 'contentApp.filters']);
});
