define(['util/messagingClient', 'logging', 'staticConfig'],
  function(client, logging, sc) {

  logging.init(true, "optionsctrl", client);
	return ['$scope', '$location', '$http', function($scope, $location, $http) {

    // load config
    client.sendBroadcast(
    {
      cmd: 'GetConfig',
      args: {}
    },
    function(config) {
      logging.debug("Config loaded: " + JSON.stringify(config));
      $scope.config = config;

      $scope.$apply();
    });

    $scope.Cancel = function() {
      window.close();
    };

    $scope.AddHost = function() {
      var host = $scope.search;
      $scope.search = "";
      $scope.config.hostsList[host] = true;
    };

    $scope.RemoveHost = function(host) {
      var listID = $scope.config.activeListID;
      delete $scope.config.hostsList[host];
    };


		$scope.ChangeOptions = function() {

      var config = $scope.config;
      logging.debug("ChangeOptions config: " + JSON.stringify(config));

      // save config
      client.sendBroadcast({
        cmd: 'SetConfig',
        args: {
          config: config
        }
      }, function() {
          window.close();
      });
    };

		// because this has happened asynchronously we've missed
		// Angular's initial call to $apply after the controller has been loaded
		// hence we need to explicitly call it at the end of our Controller constructor
		$scope.$apply();
	}];
});