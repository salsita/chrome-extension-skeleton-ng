define(['util/messagingClient', 'logging', 'staticConfig'],
  function(client, logging, sc) {
  logging.init(true, "welcomectrl", client);
	return ['$scope', '$location', '$http', function($scope, $location, $http) {

		$scope.Continue = function() {
      // read config
      client.sendBroadcast(
      {
        cmd: 'GetConfig',
        args: {}
      },
      function(config) {
        logging.debug("config: " + JSON.stringify(config));
        config.name = $scope.yourName;

        logging.debug("Jump to options: ");
        $location.path(sc.routes.options);
        $scope.$apply();
      });
    };

		// because this has happened asynchronously we've missed
		// Angular's initial call to $apply after the controller has been loaded
		// hence we need to explicitly call it at the end of our Controller constructor
		$scope.$apply();
	}];
});