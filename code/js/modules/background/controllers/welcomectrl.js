define(['util/messagingClient', 'logging', 'staticConfig'],
  function(client, logging, sc) {
  logging.init(true, "welcomectrl", client);
  return ['$scope', '$location', '$http', function($scope, $location, $http) {

    // some variable for check if angular works ok
    $scope.welcome_page = "Welcome page";

    // because this has happened asynchronously we've missed
    // Angular's initial call to $apply after the controller has been loaded
    // hence we need to explicitly call it at the end of our Controller constructor
    $scope.$apply();
  }];
});