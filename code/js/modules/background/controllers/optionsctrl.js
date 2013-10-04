define(['util/messagingClient', 'logging'],
  function(client, logging) {

  var log = new logging(true, 'optionsctrl', client);
  return ['$scope', '$location', '$http', function($scope, $location, $http) {
    log.debug('optionsctrl started');

    // some variable for check if angular works ok
    $scope.options_page = 'Options page';

    // load config on page load
    client.sendBroadcast(
    {
      cmd: 'GetConfig',
      args: {}
    },
    function(config) {
      log.debug('Config loaded: ' + JSON.stringify(config));
      $scope.config = config.config;

      $scope.$apply();
    });

    // save config changes to local store
    $scope.ChangeOptions = function() {
      var config = $scope.config;
      log.debug('ChangeOptions config: ' + JSON.stringify(config));

      // save config
      client.sendBroadcast({
        cmd: 'SetConfig',
        args: {
          config: config
        }
      }, function() {
        log.debug('Config saved');
      });
    };

    // because this has happened asynchronously we've missed
    // Angular's initial call to $apply after the controller has been loaded
    // hence we need to explicitly call it at the end of our Controller constructor
    $scope.$apply();
  }];
});