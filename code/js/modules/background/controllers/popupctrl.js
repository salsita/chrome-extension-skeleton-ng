define(['util/messagingClient', 'logging'],
  function(client, logging) {

  var log = new logging(true, 'popupctrl', client);
  return ['$scope', '$location', '$http', function($scope, $location, $http) {
    log.debug('popupctrl started');

    // some variable for check if angular works ok
    $scope.popup_page = 'Popup page';

    // because this has happened asynchronously we've missed
    // Angular's initial call to $apply after the controller has been loaded
    // hence we need to explicitly call it at the end of our Controller constructor
    $scope.$apply();
  }];
});